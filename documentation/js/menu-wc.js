'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">default documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccordionControlModule.html" data-type="entity-link">AccordionControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' : 'data-target="#xs-components-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' :
                                            'id="xs-components-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' }>
                                            <li class="link">
                                                <a href="components/AccordionControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' : 'data-target="#xs-directives-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' :
                                        'id="xs-directives-links-module-AccordionControlModule-f92da8bb842a77aad91d584103835cd7"' }>
                                        <li class="link">
                                            <a href="directives/AccordionControlPanelContentDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionControlPanelContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AccordionControlPanelDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionControlPanelDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AccordionControlPanelTitleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccordionControlPanelTitleDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' : 'data-target="#xs-components-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' :
                                            'id="xs-components-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' : 'data-target="#xs-injectables-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' :
                                        'id="xs-injectables-links-module-AppModule-16afb81523e66e24081f4f98b3ee6db2"' }>
                                        <li class="link">
                                            <a href="injectables/AclService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AclService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClassInitService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClassInitService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ClipboardService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClipboardService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DataTableService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataTableService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HeaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HeaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LayoutConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LayoutConfigStorageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutConfigStorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LayoutRefService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LayoutRefService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MenuAsideService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuAsideService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MenuConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MenuHorizontalService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MenuHorizontalService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessengerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessengerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PageConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PageConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/QuickSearchService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuickSearchService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SplashScreenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SplashScreenService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SubheaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SubheaderService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UtilsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UtilsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuditLogModule.html" data-type="entity-link">AuditLogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuditLogModule-1cc777936939ce3a35548247a37a81be"' : 'data-target="#xs-components-links-module-AuditLogModule-1cc777936939ce3a35548247a37a81be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuditLogModule-1cc777936939ce3a35548247a37a81be"' :
                                            'id="xs-components-links-module-AuditLogModule-1cc777936939ce3a35548247a37a81be"' }>
                                            <li class="link">
                                                <a href="components/AuditLogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuditLogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-4324a033f778707528df3ec698bc1721"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-4324a033f778707528df3ec698bc1721"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-4324a033f778707528df3ec698bc1721"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-4324a033f778707528df3ec698bc1721"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TokenStorage.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TokenStorage</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3b9de0d96b08e7a0fc8dd5817074a2eb"' : 'data-target="#xs-components-links-module-AuthModule-3b9de0d96b08e7a0fc8dd5817074a2eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3b9de0d96b08e7a0fc8dd5817074a2eb"' :
                                            'id="xs-components-links-module-AuthModule-3b9de0d96b08e7a0fc8dd5817074a2eb"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthNoticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthNoticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BuilderModule.html" data-type="entity-link">BuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BuilderModule-8bc1d2655c536c1e6cb9631d8abbaf78"' : 'data-target="#xs-components-links-module-BuilderModule-8bc1d2655c536c1e6cb9631d8abbaf78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BuilderModule-8bc1d2655c536c1e6cb9631d8abbaf78"' :
                                            'id="xs-components-links-module-BuilderModule-8bc1d2655c536c1e6cb9631d8abbaf78"' }>
                                            <li class="link">
                                                <a href="components/BuilderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BuilderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodePreviewModule.html" data-type="entity-link">CodePreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CodePreviewModule-b438d1392b7599ec0526520b4db97723"' : 'data-target="#xs-components-links-module-CodePreviewModule-b438d1392b7599ec0526520b4db97723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CodePreviewModule-b438d1392b7599ec0526520b4db97723"' :
                                            'id="xs-components-links-module-CodePreviewModule-b438d1392b7599ec0526520b4db97723"' }>
                                            <li class="link">
                                                <a href="components/CodePreviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodePreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodePreviewInnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodePreviewInnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' : 'data-target="#xs-directives-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' :
                                        'id="xs-directives-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' }>
                                        <li class="link">
                                            <a href="directives/ClipboardDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClipboardDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/HeaderDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MenuAsideDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuAsideDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MenuAsideOffcanvasDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuAsideOffcanvasDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MenuAsideToggleDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuAsideToggleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MenuHorizontalDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHorizontalDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MenuHorizontalOffcanvasDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHorizontalOffcanvasDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PortletDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortletDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/QuickSearchDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickSearchDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/QuickSidebarOffcanvasDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickSidebarOffcanvasDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ScrollTopDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollTopDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' : 'data-target="#xs-pipes-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' :
                                            'id="xs-pipes-links-module-CoreModule-04875736bbc76429f0cfdce8bd52aa15"' }>
                                            <li class="link">
                                                <a href="pipes/ConsoleLogPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConsoleLogPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FirstLetterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FirstLetterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/GetObjectPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GetObjectPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/JoinPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JoinPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TimeElapsedPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeElapsedPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-945ca601589902daf479a0f7ba7a1ce8"' : 'data-target="#xs-components-links-module-DashboardModule-945ca601589902daf479a0f7ba7a1ce8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-945ca601589902daf479a0f7ba7a1ce8"' :
                                            'id="xs-components-links-module-DashboardModule-945ca601589902daf479a0f7ba7a1ce8"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Dayana1Module.html" data-type="entity-link">Dayana1Module</a>
                            </li>
                            <li class="link">
                                <a href="modules/Dayana2Module.html" data-type="entity-link">Dayana2Module</a>
                            </li>
                            <li class="link">
                                <a href="modules/Dayana3Module.html" data-type="entity-link">Dayana3Module</a>
                            </li>
                            <li class="link">
                                <a href="modules/DayanaModule.html" data-type="entity-link">DayanaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DayanaModule-76abfca4a024a389fc7ad917e06ad0ec"' : 'data-target="#xs-components-links-module-DayanaModule-76abfca4a024a389fc7ad917e06ad0ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DayanaModule-76abfca4a024a389fc7ad917e06ad0ec"' :
                                            'id="xs-components-links-module-DayanaModule-76abfca4a024a389fc7ad917e06ad0ec"' }>
                                            <li class="link">
                                                <a href="components/Dayana1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dayana1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dayana2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dayana2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Dayana3Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Dayana3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DayanaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DayanaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndexModule.html" data-type="entity-link">IndexModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndexModule-3369b439ebf615c71ac4a526b77112dd"' : 'data-target="#xs-components-links-module-IndexModule-3369b439ebf615c71ac4a526b77112dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndexModule-3369b439ebf615c71ac4a526b77112dd"' :
                                            'id="xs-components-links-module-IndexModule-3369b439ebf615c71ac4a526b77112dd"' }>
                                            <li class="link">
                                                <a href="components/IndexComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-46e6245c4b856462cd71bdcb44695494"' : 'data-target="#xs-components-links-module-LayoutModule-46e6245c4b856462cd71bdcb44695494"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-46e6245c4b856462cd71bdcb44695494"' :
                                            'id="xs-components-links-module-LayoutModule-46e6245c4b856462cd71bdcb44695494"' }>
                                            <li class="link">
                                                <a href="components/AsideLeftComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AsideLeftComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AsideRightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AsideRightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BrandComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BrandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuHorizontalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuHorizontalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuSectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuickActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDefaultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubheaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ListTimelineModule.html" data-type="entity-link">ListTimelineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ListTimelineModule-2b2ddcde16f0d840647d4797cc8421f1"' : 'data-target="#xs-components-links-module-ListTimelineModule-2b2ddcde16f0d840647d4797cc8421f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ListTimelineModule-2b2ddcde16f0d840647d4797cc8421f1"' :
                                            'id="xs-components-links-module-ListTimelineModule-2b2ddcde16f0d840647d4797cc8421f1"' }>
                                            <li class="link">
                                                <a href="components/ListTimelineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListTimelineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimelineItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimelineItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link">MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MailModule-75071bc482f1eb0b7104648e713bee98"' : 'data-target="#xs-components-links-module-MailModule-75071bc482f1eb0b7104648e713bee98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MailModule-75071bc482f1eb0b7104648e713bee98"' :
                                            'id="xs-components-links-module-MailModule-75071bc482f1eb0b7104648e713bee98"' }>
                                            <li class="link">
                                                <a href="components/MailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialPreviewModule.html" data-type="entity-link">MaterialPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MaterialPreviewModule-b4481babdf7ac6e5552700d03f982c17"' : 'data-target="#xs-components-links-module-MaterialPreviewModule-b4481babdf7ac6e5552700d03f982c17"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MaterialPreviewModule-b4481babdf7ac6e5552700d03f982c17"' :
                                            'id="xs-components-links-module-MaterialPreviewModule-b4481babdf7ac6e5552700d03f982c17"' }>
                                            <li class="link">
                                                <a href="components/MaterialPreviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaterialPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessengerModule.html" data-type="entity-link">MessengerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MessengerModule-4b1e1b1cfc2b4c565e5ec66975eae646"' : 'data-target="#xs-components-links-module-MessengerModule-4b1e1b1cfc2b4c565e5ec66975eae646"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessengerModule-4b1e1b1cfc2b4c565e5ec66975eae646"' :
                                            'id="xs-components-links-module-MessengerModule-4b1e1b1cfc2b4c565e5ec66975eae646"' }>
                                            <li class="link">
                                                <a href="components/MessengerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessengerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessengerInComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessengerInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessengerOutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessengerOutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-1ad0d1af0e86652c0f7ad1c04e96fb71"' : 'data-target="#xs-components-links-module-PagesModule-1ad0d1af0e86652c0f7ad1c04e96fb71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-1ad0d1af0e86652c0f7ad1c04e96fb71"' :
                                            'id="xs-components-links-module-PagesModule-1ad0d1af0e86652c0f7ad1c04e96fb71"' }>
                                            <li class="link">
                                                <a href="components/ActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link">PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PartialsModule.html" data-type="entity-link">PartialsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PartialsModule-18b17d8dd2da3f9eb340cf7ffac2bf06"' : 'data-target="#xs-components-links-module-PartialsModule-18b17d8dd2da3f9eb340cf7ffac2bf06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PartialsModule-18b17d8dd2da3f9eb340cf7ffac2bf06"' :
                                            'id="xs-components-links-module-PartialsModule-18b17d8dd2da3f9eb340cf7ffac2bf06"' }>
                                            <li class="link">
                                                <a href="components/AuthorProfitComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorProfitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BestSellerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BestSellerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FinanceStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FinanceStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoticeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NoticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PackagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PackagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuickSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentActivitiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentActivitiesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentNotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentNotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScrollTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollTopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportTicketsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportTicketsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TasksComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TasksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortletModule.html" data-type="entity-link">PortletModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortletModule-7bb6325fe26cb3123bcb5452c9e74bd1"' : 'data-target="#xs-components-links-module-PortletModule-7bb6325fe26cb3123bcb5452c9e74bd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortletModule-7bb6325fe26cb3123bcb5452c9e74bd1"' :
                                            'id="xs-components-links-module-PortletModule-7bb6325fe26cb3123bcb5452c9e74bd1"' }>
                                            <li class="link">
                                                <a href="components/PortletComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PortletComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerButtonModule.html" data-type="entity-link">SpinnerButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpinnerButtonModule-6a16e019df44a3733f9114f61b60a226"' : 'data-target="#xs-components-links-module-SpinnerButtonModule-6a16e019df44a3733f9114f61b60a226"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerButtonModule-6a16e019df44a3733f9114f61b60a226"' :
                                            'id="xs-components-links-module-SpinnerButtonModule-6a16e019df44a3733f9114f61b60a226"' }>
                                            <li class="link">
                                                <a href="components/SpinnerButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserManagementModule.html" data-type="entity-link">UserManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserManagementModule-370315a4c01f2c71516e17d140fb8d29"' : 'data-target="#xs-components-links-module-UserManagementModule-370315a4c01f2c71516e17d140fb8d29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserManagementModule-370315a4c01f2c71516e17d140fb8d29"' :
                                            'id="xs-components-links-module-UserManagementModule-370315a4c01f2c71516e17d140fb8d29"' }>
                                            <li class="link">
                                                <a href="components/UserManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserManagementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WidgetChartsModule.html" data-type="entity-link">WidgetChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WidgetChartsModule-575b345bffa2c64f002f51c4ef32125c"' : 'data-target="#xs-components-links-module-WidgetChartsModule-575b345bffa2c64f002f51c4ef32125c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WidgetChartsModule-575b345bffa2c64f002f51c4ef32125c"' :
                                            'id="xs-components-links-module-WidgetChartsModule-575b345bffa2c64f002f51c4ef32125c"' }>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DoughnutChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DoughnutChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AuditLogComponent-1.html" data-type="entity-link">AuditLogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecuperarPasswordComponent.html" data-type="entity-link">RecuperarPasswordComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AclModel.html" data-type="entity-link">AclModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthFakeDb.html" data-type="entity-link">AuthFakeDb</a>
                            </li>
                            <li class="link">
                                <a href="classes/CarsDb.html" data-type="entity-link">CarsDb</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataTableDataSource.html" data-type="entity-link">DataTableDataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataTableItemModel.html" data-type="entity-link">DataTableItemModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExternalCodeExample.html" data-type="entity-link">ExternalCodeExample</a>
                            </li>
                            <li class="link">
                                <a href="classes/LayoutConfig.html" data-type="entity-link">LayoutConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogsDb.html" data-type="entity-link">LogsDb</a>
                            </li>
                            <li class="link">
                                <a href="classes/Mensaje.html" data-type="entity-link">Mensaje</a>
                            </li>
                            <li class="link">
                                <a href="classes/MenuConfig.html" data-type="entity-link">MenuConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessengerDb.html" data-type="entity-link">MessengerDb</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagesConfig.html" data-type="entity-link">PagesConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryParamsModel.html" data-type="entity-link">QueryParamsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryResultsModel.html" data-type="entity-link">QueryResultsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuickSearchDb.html" data-type="entity-link">QuickSearchDb</a>
                            </li>
                            <li class="link">
                                <a href="classes/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccordionControlConfig.html" data-type="entity-link">AccordionControlConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthNoticeService.html" data-type="entity-link">AuthNoticeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FakeApiService.html" data-type="entity-link">FakeApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpUtilsService.html" data-type="entity-link">HttpUtilsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IndexService.html" data-type="entity-link">IndexService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaisesService.html" data-type="entity-link">PaisesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link">ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationService.html" data-type="entity-link">TranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link">AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link">TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccessData.html" data-type="entity-link">AccessData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccordionControlPanelChangeEvent.html" data-type="entity-link">AccordionControlPanelChangeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AclInterface.html" data-type="entity-link">AclInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthNotice.html" data-type="entity-link">AuthNotice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Breadcrumb.html" data-type="entity-link">Breadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigData.html" data-type="entity-link">ConfigData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigModel.html" data-type="entity-link">ConfigModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credential.html" data-type="entity-link">Credential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Element.html" data-type="entity-link">Element</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LanguageFlag.html" data-type="entity-link">LanguageFlag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Locale.html" data-type="entity-link">Locale</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogData.html" data-type="entity-link">LogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageData.html" data-type="entity-link">MessageData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PortletOptions.html" data-type="entity-link">PortletOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpinnerButtonOptions.html" data-type="entity-link">SpinnerButtonOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});