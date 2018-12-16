webpackJsonp([17],{1209:function(n,s,a){n.exports={basic:a(1294)}},1294:function(n,s){n.exports={content:[["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/popover/demo/basic.tsx"},"Demo Source Code"]]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/popover/demo/basic.md",id:"components-popover-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Platform<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Popover <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Item <span class="token operator">=</span> Popover<span class="token punctuation">.</span>Item<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">PopoverExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment" spellcheck="true">// componentDidMount() {</span>\n    <span class="token comment" spellcheck="true">//   setInterval(() => {</span>\n    <span class="token comment" spellcheck="true">//     this.refs.mc.refs.menuContext.toggleMenu(\'m\');</span>\n    <span class="token comment" spellcheck="true">//   }, 2000);</span>\n    <span class="token comment" spellcheck="true">// }</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onSelect <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token comment" spellcheck="true">// visible: false,</span>\n        selected<span class="token punctuation">:</span> value<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      <span class="token comment" spellcheck="true">// visible: false,</span>\n      selected<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment" spellcheck="true">// handleVisibleChange = (_visible) => {</span>\n  <span class="token comment" spellcheck="true">//   this.setState({</span>\n  <span class="token comment" spellcheck="true">//     visible,</span>\n  <span class="token comment" spellcheck="true">//   });</span>\n  <span class="token comment" spellcheck="true">// }</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> overlay <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`option </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>option <span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    overlay <span class="token operator">=</span> overlay<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>disabled opt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Item</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button</span> <span class="token attr-name">ct"</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#efeff4\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\u5173\u95ed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Item</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginLeft<span class="token punctuation">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            \u9009\u62e9\u4e86\uff1a<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>selected<span class="token punctuation">}</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>menuContainer<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>Popover\n            name<span class="token operator">=</span><span class="token string">"m"</span>\n            style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#eee\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n            overlay<span class="token operator">=</span><span class="token punctuation">{</span>overlay<span class="token punctuation">}</span>\n            contextStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>contextStyle<span class="token punctuation">}</span>\n            <span class="token comment" spellcheck="true">// tslint:disable-next-line:jsx-no-multiline-js</span>\n            overlayStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n              styles<span class="token punctuation">.</span>overlayStyle<span class="token punctuation">,</span>\n              Platform<span class="token punctuation">.</span>OS <span class="token operator">===</span> <span class="token string">\'android\'</span> <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">.</span>androidOverlayStyle<span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">}</span>\n            triggerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>triggerStyle<span class="token punctuation">}</span>\n            onSelect<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span>\n          <span class="token operator">></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\u83dc\u5355<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popover</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  contextStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    margin<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n    flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  menuContainer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexDirection<span class="token punctuation">:</span> <span class="token string">\'row\'</span><span class="token punctuation">,</span>\n    justifyContent<span class="token punctuation">:</span> <span class="token string">\'flex-end\'</span><span class="token punctuation">,</span>\n    height<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n    paddingHorizontal<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    paddingVertical<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  triggerStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flexDirection<span class="token punctuation">:</span> <span class="token string">\'row\'</span><span class="token punctuation">,</span>\n    paddingHorizontal<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  overlayStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    left<span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>\n    marginTop<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment" spellcheck="true">// \u5728 iOS \u4e0a\u5f39\u51fa\u5c42\u6709\u9634\u5f71\uff0cAndroid \u4e0a\u6ca1\u6709\uff0c</span>\n  <span class="token comment" spellcheck="true">// \u8be6\u7ec6\uff1ahttp://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor</span>\n  androidOverlayStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    borderWidth<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    borderColor<span class="token punctuation">:</span> <span class="token string">\'#ccc\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">\'Popover\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> description <span class="token operator">=</span> <span class="token string">\'Popover example\'</span><span class="token punctuation">;</span>'}]}}});