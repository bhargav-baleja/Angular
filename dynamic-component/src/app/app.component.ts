import { Component, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentDirective } from './directive/dynamic-component.directive';
import { EnglishComponent } from './component-factory-resolver/english/english.component';
import { GujaratiComponent } from './component-factory-resolver/gujarati/gujarati.component';
import { NameComponent } from './name.component';
import { Portal, ComponentPortal } from '@angular/cdk/portal';
import { HindiComponent } from './cdk-portal/hindi/hindi.component';
import { ChineseComponent } from './cdk-portal/chinese/chinese.component';
import { OverlayConfig, Overlay } from '@angular/cdk/overlay'
import { MarathiComponent } from './overlay/marathi/marathi.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private dynamic:any
  private interval:any
  private name:string='Hello'
  private flag:number=0
  public buttonEnable:boolean=false
  public selectedPortal:Portal<any>
  public componentPortalChinese:ComponentPortal<ChineseComponent>
  public componentPortalHindi:ComponentPortal<HindiComponent>

  @ViewChild(DynamicComponentDirective,{static:true}) dynamicComponent:DynamicComponentDirective

  constructor(private resolver:ComponentFactoryResolver,public overlay:Overlay)
  {
    this.dynamic=EnglishComponent
  }

  ngOnDestroy()
  {
    console.log('Destroy');
    clearInterval(this.interval)
  }

  cdkPortal()
  {
      this.dynamicComponent.viewContainerRef.detach()
      clearInterval(this.interval)
      this.buttonEnable=true
      this.flag=0
      this.componentPortalHindi=new ComponentPortal(HindiComponent)
      this.componentPortalChinese=new ComponentPortal(ChineseComponent)
  }

  loadComponent()
  {
      this.buttonEnable=false
      let componentFatory=this.resolver.resolveComponentFactory(this.dynamic)
      this.dynamicComponent.viewContainerRef.clear()
      const componentRef=this.dynamicComponent.viewContainerRef.createComponent(componentFatory);
      (<NameComponent>componentRef.instance).data=this.name
      if(this.flag==0)
      {
        this.flag=1
        this.switch()
      }
  }

  overlayComponent()
  {
    this.dynamicComponent.viewContainerRef.detach()
    clearInterval(this.interval)
    this.buttonEnable=false
    this.flag=0

    let config=new OverlayConfig()

    config.positionStrategy=this.overlay.position().global().centerHorizontally()
    config.hasBackdrop=true

    let overlayRef=this.overlay.create(config);

    overlayRef.attach(new ComponentPortal(MarathiComponent,this.dynamicComponent.viewContainerRef))

    overlayRef.backdropClick().subscribe(()=>
      {
          overlayRef.dispose()
      })

  }

  switch()
  {
    this.interval=setInterval(()=>
    {
      if(this.name==='Hello')
      {
        this.dynamic=GujaratiComponent
        this.name='કેમ છો'
      }
      else
      {
        this.dynamic=EnglishComponent
        this.name='Hello'
      }
      this.loadComponent()
    },3000)
  }

  setPortal(component:Portal<any>)
  {
    this.selectedPortal=component
  }
  detachPortal()
  {
    this.selectedPortal.detach()
  }
}
