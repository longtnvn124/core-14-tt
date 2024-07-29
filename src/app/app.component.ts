import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {debounceTime, distinctUntilChanged, Subscription} from "rxjs";
import {NotificationService, StateLoadingV2} from "@core/services/notification.service";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription = new Subscription();

  isLoading = false;

  stateLoadingV2: StateLoadingV2 = {
    loading: false,
    icon: null,
    text: '',
    process: null
  };

  @HostListener('window:scroll') handleOnWindowScroll() {
    this.notification.pushWindowScrollEvent(window.scrollY);
  }

  @HostListener('window:resize') onResize() {
    this.checkScreenHeight();
  }

  @ViewChild('checkViewPortHeight', {static: true}) checkViewPortHeight: ElementRef<HTMLElement>;

  @ViewChild('progressAnimationPipe') progressAnimationPipe: ElementRef<HTMLElement>;

  timeOutCloseAnimation: any;

  constructor(
    private messageService: MessageService,
    private notification: NotificationService,
    private translate: TranslateService,
    private http: HttpClient,
    private primengConfig: PrimeNGConfig
  ) {
    const _url: URL = new URL(window.location.href);
    const device: string = _url.searchParams.has('device') ? _url.searchParams.get('device') : 'desktop';
    if (_url.searchParams.has('device') || !localStorage.getItem('device')) {
      localStorage.setItem('device', device);
    }

    const observerOnLoading = this.notification.onAppLoading.pipe(debounceTime(50), distinctUntilChanged()).subscribe(isLoading => this.isLoading = isLoading);
    this.subscription.add(observerOnLoading);

    const observerOnLoadingV2 = this.notification.onLoadingAnimationV2.pipe(debounceTime(10)).subscribe(state => {
      if (state.hasOwnProperty('loading')) {
        this.stateLoadingV2.loading = state.loading;
      }
      if (state.hasOwnProperty('icon')) {
        this.stateLoadingV2.icon = state.icon;
      }
      if (state.hasOwnProperty('text')) {
        this.stateLoadingV2.text = state.text;
        this.stateLoadingV2['__html_text'] = state.text ? state.text.split('').reduce((html, w) => html + '<span class="app-loading-text-animation__letter">' + w + '</span>', '') : '';
      }
      if (state.hasOwnProperty('process') && state.process) {
        const percent = Math.min(state.process.percent, 100);
        if (percent === 100) {
          this.timeOutCloseAnimation = setTimeout(() => this.stateLoadingV2.loading = false, 500);
        } else {
          if (this.timeOutCloseAnimation) {
            clearTimeout(this.timeOutCloseAnimation);
          }
        }
        this.stateLoadingV2.process = {percent};
        if (this.progressAnimationPipe) {
          const percentText = Math.floor(percent).toString(10) + '%';
          this.progressAnimationPipe.nativeElement.style.width = percentText;
          this.progressAnimationPipe.nativeElement.innerText = percentText;
          this.progressAnimationPipe.nativeElement.setAttribute('percent', percentText);
        }
      }
    });
    this.subscription.add(observerOnLoadingV2);

    const observerOnPushNotification = this.notification.onAppToastMessage.subscribe(toast => this.messageService.add({
      severity: toast.type,
      summary: toast.head,
      detail: toast.body,
      life: 3000
    }));
    this.subscription.add(observerOnPushNotification);


  }

  ngAfterViewInit(): void {
    this.checkScreenHeight();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }


  checkScreenHeight() {
    if (this.checkViewPortHeight && this.checkViewPortHeight.nativeElement.clientHeight) {
      const width = this.checkViewPortHeight.nativeElement.clientWidth;
      const height = this.checkViewPortHeight.nativeElement.clientHeight;
      document.body.style.setProperty('--max-screen-height', height + 'px');
      document.body.style.setProperty('--max-screen-width', width + 'px');
      this.notification.setScreenSize({height, width});
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.timeOutCloseAnimation) {
      clearTimeout(this.timeOutCloseAnimation);
    }
  }

}
