import { Property, View } from '@nativescript/core';
import { PagerBase } from './index.common';
export * from './index.common';
export { ItemsSource, Transformer } from './index.common';
export declare class Pager extends PagerBase {
    nativeViewProtected: androidx.viewpager2.widget.ViewPager2;
    _androidViewId: number;
    private _disableAnimation;
    pagesCount: number;
    widthMeasureSpec: number;
    heightMeasureSpec: number;
    perPage: number;
    private _observableArrayInstance;
    itemTemplateUpdated(oldData: any, newData: any): void;
    private _oldDisableAnimation;
    private _pagerAdapter;
    private _views;
    private _pageListener;
    _realizedItems: Map<globalAndroid.view.View, View>;
    _childrenViewsType: Map<number, View>;
    _realizedTemplates: Map<string, Map<globalAndroid.view.View, View>>;
    lastEvent: number;
    private _lastSpacing;
    private _lastPeaking;
    private compositeTransformer;
    private marginTransformer;
    private _transformers;
    private _selectedIndexBeforeLoad;
    private _pager;
    private _indicatorView;
    constructor();
    get views(): any[];
    set views(value: any[]);
    get pager(): any;
    get indicatorView(): any;
    createNativeView(): globalAndroid.widget.RelativeLayout;
    initNativeView(): void;
    protected _removeChildView(index: number): void;
    protected _addChildView(view: any, type: any): void;
    onLayoutChange(args: any): void;
    private _setSpacing;
    private _setPeaking;
    private _setIndicator;
    private _setTransformers;
    private _observableArrayHandler;
    disposeNativeView(): void;
    get disableAnimation(): boolean;
    set disableAnimation(value: boolean);
    get pagerAdapter(): PagerRecyclerAdapter;
    get _childrenCount(): number;
    private _updateScrollPosition;
    initStaticPagerAdapter(): void;
    onLoaded(): void;
    scrollToIndexAnimated(index: number, animate: boolean): void;
    _onItemsChanged(oldValue: any, newValue: any): void;
    refresh(): void;
    updatePagesCount(value: number): void;
    onUnloaded(): void;
    eachChildView(callback: (child: View) => boolean): void;
    updateAdapter(): void;
    _selectedIndexUpdatedFromNative(newIndex: number): void;
    _horizontalOffset: number;
    get horizontalOffset(): number;
    _verticalOffset: number;
    get verticalOffset(): number;
    static getProgress(indicator: any, position: any, positionOffset: any, isRtl: any): any[];
    private _autoPlayInterval;
    _nextIndex(): number;
    _initAutoPlay(value: boolean): void;
    get itemCount(): number;
    get lastIndex(): number;
}
export declare const pagesCountProperty: Property<Pager, number>;
interface PagerRecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
    new (owner: WeakRef<Pager>): PagerRecyclerAdapter;
    getPosition(index: number): number;
    lastIndex(): number;
}
declare let PagerRecyclerAdapter: PagerRecyclerAdapter;
