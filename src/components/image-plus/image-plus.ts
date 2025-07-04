Component({
  properties: {
    src: {
      type: String,
      observer() {
        this.setData({
          error: false,
          loading: true,
        });
      },
    },                    // 图片地址
    mode: {               // 图片填充模式
      type: String,
      value: 'scaleToFill'
    },
    webp: {
      type: Boolean,
      value: false,
    },
    showError: {
      type: Boolean,
      value: true,
    },
    showLoading: {
      type: Boolean,
      value: true,
    },
    width: String,        // 图片宽度
    height: String,       // 图片高度
    round: Boolean,       // 是否圆形
    lazyLoad: Boolean,    // 是否懒加载
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    showMenuByLongpress: Boolean,
    preview: Boolean
  },

  data: {
    error: false,
    loading: true,
  },

  methods: {
    onLoad(event: any) {
      this.setData({
        loading: false,
      });

      this.triggerEvent('load', event.detail)
    },
    onError(event: any) {
      this.setData({
        loading: false,
        error: true,
      });

      this.triggerEvent('error', event.detail);
    },

    onClick(event: any) {
      this.triggerEvent('click', event.detail);
    },

    onPewview() {
      if (!this.properties.preview) return;
      wx.previewImage({
        current: this.properties.src,
        urls: [this.properties.src],
      })
    }
  },
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  }
});
