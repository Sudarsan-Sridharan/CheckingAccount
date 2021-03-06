/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require("@angular/core");
var import1 = require("../../../src/app/app.module");
var import2 = require("@angular/common");
var import3 = require("@angular/router");
var import4 = require("@angular/platform-browser");
var import5 = require("../../../src/app/app-routing.module");
var import6 = require("./banking/account/account.component.ngfactory");
var import7 = require("./banking/accounts/accounts.component.ngfactory");
var import8 = require("./banking/budget/budget.component.ngfactory");
var import9 = require("./banking/categories/categories.component.ngfactory");
var import10 = require("./banking/transactions/transactions.component.ngfactory");
var import11 = require("./app.component.ngfactory");
var import12 = require("../../../src/app/banking/account/account.component");
var import13 = require("../../../src/app/banking/accounts/accounts.component");
var import14 = require("../../../src/app/banking/budget/budget.component");
var import15 = require("../../../src/app/banking/categories/categories.component");
var import16 = require("../../../src/app/banking/transactions/transactions.component");
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import6.AccountComponentNgFactory,
            import7.AccountsComponentNgFactory,
            import8.BudgetComponentNgFactory,
            import9.CategoriesComponentNgFactory,
            import10.TransactionsComponentNgFactory,
            import11.AppComponentNgFactory
        ], [import11.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_23", {
        get: function () {
            if ((this.__LOCALE_ID_23 == null)) {
                (this.__LOCALE_ID_23 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_24", {
        get: function () {
            if ((this.__NgLocalization_24 == null)) {
                (this.__NgLocalization_24 = new import2.NgLocaleLocalization(this._LOCALE_ID_23));
            }
            return this.__NgLocalization_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_25", {
        get: function () {
            if ((this.__APP_ID_25 == null)) {
                (this.__APP_ID_25 = import0.ɵg());
            }
            return this.__APP_ID_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_26", {
        get: function () {
            if ((this.__IterableDiffers_26 == null)) {
                (this.__IterableDiffers_26 = import0.ɵl());
            }
            return this.__IterableDiffers_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_27", {
        get: function () {
            if ((this.__KeyValueDiffers_27 == null)) {
                (this.__KeyValueDiffers_27 = import0.ɵm());
            }
            return this.__KeyValueDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_28", {
        get: function () {
            if ((this.__DomSanitizer_28 == null)) {
                (this.__DomSanitizer_28 = new import4.ɵe(this.parent.get(import4.DOCUMENT)));
            }
            return this.__DomSanitizer_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_29", {
        get: function () {
            if ((this.__Sanitizer_29 == null)) {
                (this.__Sanitizer_29 = this._DomSanitizer_28);
            }
            return this.__Sanitizer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_30", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_30 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_30 = new import4.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_31", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_31 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_31 = [
                    new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_30)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_32", {
        get: function () {
            if ((this.__EventManager_32 == null)) {
                (this.__EventManager_32 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_31, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_33", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_33 == null)) {
                (this.__ɵDomSharedStylesHost_33 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_34", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_34 == null)) {
                (this.__ɵDomRendererFactory2_34 = new import4.ɵDomRendererFactory2(this._EventManager_32, this._ɵDomSharedStylesHost_33));
            }
            return this.__ɵDomRendererFactory2_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_35", {
        get: function () {
            if ((this.__RendererFactory2_35 == null)) {
                (this.__RendererFactory2_35 = this._ɵDomRendererFactory2_34);
            }
            return this.__RendererFactory2_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_36", {
        get: function () {
            if ((this.__ɵSharedStylesHost_36 == null)) {
                (this.__ɵSharedStylesHost_36 = this._ɵDomSharedStylesHost_33);
            }
            return this.__ɵSharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_37", {
        get: function () {
            if ((this.__Testability_37 == null)) {
                (this.__Testability_37 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_38", {
        get: function () {
            if ((this.__Meta_38 == null)) {
                (this.__Meta_38 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Meta_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_39", {
        get: function () {
            if ((this.__Title_39 == null)) {
                (this.__Title_39 = new import4.Title(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Title_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_40", {
        get: function () {
            if ((this.__ActivatedRoute_40 == null)) {
                (this.__ActivatedRoute_40 = import3.ɵf(this._Router_19));
            }
            return this.__ActivatedRoute_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_41", {
        get: function () {
            if ((this.__NoPreloading_41 == null)) {
                (this.__NoPreloading_41 = new import3.NoPreloading());
            }
            return this.__NoPreloading_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_42", {
        get: function () {
            if ((this.__PreloadingStrategy_42 == null)) {
                (this.__PreloadingStrategy_42 = this._NoPreloading_41);
            }
            return this.__PreloadingStrategy_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_43", {
        get: function () {
            if ((this.__RouterPreloader_43 == null)) {
                (this.__RouterPreloader_43 = new import3.RouterPreloader(this._Router_19, this._NgModuleFactoryLoader_17, this._Compiler_16, this, this._PreloadingStrategy_42));
            }
            return this.__RouterPreloader_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_44", {
        get: function () {
            if ((this.__PreloadAllModules_44 == null)) {
                (this.__PreloadAllModules_44 = new import3.PreloadAllModules());
            }
            return this.__PreloadAllModules_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_45", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_45 == null)) {
                (this.__ROUTER_INITIALIZER_45 = import3.ɵi(this._ɵg_3));
            }
            return this.__ROUTER_INITIALIZER_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_46", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_46 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_46 = [this._ROUTER_INITIALIZER_45]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_46;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import4.ɵa();
        this._NgProbeToken_2 = [import3.ɵb()];
        this._ɵg_3 = new import3.ɵg(this);
        this._APP_INITIALIZER_4 = [
            import0.ɵo,
            import4.ɵc(this.parent.get(import4.NgProbeToken, null), this._NgProbeToken_2),
            import3.ɵh(this._ɵg_3)
        ];
        this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
        this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
        this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ɵa_10 = import3.ɵd(this.parent.get(import3.Router, null));
        this._UrlSerializer_11 = new import3.DefaultUrlSerializer();
        this._RouterOutletMap_12 = new import3.RouterOutletMap();
        this._ROUTER_CONFIGURATION_13 = {};
        this._LocationStrategy_14 = import3.ɵc(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_13);
        this._Location_15 = new import2.Location(this._LocationStrategy_14);
        this._Compiler_16 = new import0.Compiler();
        this._NgModuleFactoryLoader_17 = new import0.SystemJsNgModuleLoader(this._Compiler_16, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
        this._ROUTES_18 = [[
                {
                    path: '',
                    redirectTo: '/transactions',
                    pathMatch: 'full'
                },
                {
                    path: 'account',
                    component: import12.AccountComponent
                },
                {
                    path: 'accounts',
                    component: import13.AccountsComponent
                },
                {
                    path: 'budget',
                    component: import14.BudgetComponent
                },
                {
                    path: 'categories',
                    component: import15.CategoriesComponent
                },
                {
                    path: 'transactions',
                    component: import16.TransactionsComponent
                }
            ]
        ];
        this._Router_19 = import3.ɵe(this._ApplicationRef_7, this._UrlSerializer_11, this._RouterOutletMap_12, this._Location_15, this, this._NgModuleFactoryLoader_17, this._Compiler_16, this._ROUTES_18, this._ROUTER_CONFIGURATION_13, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null));
        this._RouterModule_20 = new import3.RouterModule(this._ɵa_10, this._Router_19);
        this._AppRoutingModule_21 = new import5.AppRoutingModule();
        this._AppModule_22 = new import1.AppModule();
        return this._AppModule_22;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_2;
        }
        if ((token === import3.ɵg)) {
            return this._ɵg_3;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_6;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_7;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_8;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_9;
        }
        if ((token === import3.ɵa)) {
            return this._ɵa_10;
        }
        if ((token === import3.UrlSerializer)) {
            return this._UrlSerializer_11;
        }
        if ((token === import3.RouterOutletMap)) {
            return this._RouterOutletMap_12;
        }
        if ((token === import3.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_13;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_14;
        }
        if ((token === import2.Location)) {
            return this._Location_15;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_16;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_17;
        }
        if ((token === import3.ROUTES)) {
            return this._ROUTES_18;
        }
        if ((token === import3.Router)) {
            return this._Router_19;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_20;
        }
        if ((token === import5.AppRoutingModule)) {
            return this._AppRoutingModule_21;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_22;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_23;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_24;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_25;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_26;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_27;
        }
        if ((token === import4.DomSanitizer)) {
            return this._DomSanitizer_28;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_29;
        }
        if ((token === import4.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_30;
        }
        if ((token === import4.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_31;
        }
        if ((token === import4.EventManager)) {
            return this._EventManager_32;
        }
        if ((token === import4.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_33;
        }
        if ((token === import4.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_34;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_35;
        }
        if ((token === import4.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_36;
        }
        if ((token === import0.Testability)) {
            return this._Testability_37;
        }
        if ((token === import4.Meta)) {
            return this._Meta_38;
        }
        if ((token === import4.Title)) {
            return this._Title_39;
        }
        if ((token === import3.ActivatedRoute)) {
            return this._ActivatedRoute_40;
        }
        if ((token === import3.NoPreloading)) {
            return this._NoPreloading_41;
        }
        if ((token === import3.PreloadingStrategy)) {
            return this._PreloadingStrategy_42;
        }
        if ((token === import3.RouterPreloader)) {
            return this._RouterPreloader_43;
        }
        if ((token === import3.PreloadAllModules)) {
            return this._PreloadAllModules_44;
        }
        if ((token === import3.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_45;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_46;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_33 && this._ɵDomSharedStylesHost_33.ngOnDestroy());
        (this.__RouterPreloader_43 && this._RouterPreloader_43.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovZGV2L0NoZWNraW5nQWNjb3VudC9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovZGV2L0NoZWNraW5nQWNjb3VudC9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
//# sourceMappingURL=app.module.ngfactory.js.map