$(document).ready(function () {
  kbCodeSnippet();
});

function kbCodeSnippet(selector, scrollbarTheme) {
  $(selector || '.kb-code').each(function (i, block) {
    const codeElement = $(block);
    const lang = (codeElement.attr('data-lang') || '').toLowerCase();
    const lineNumbers = !!codeElement.attr('data-lines');
    codeElement
      .html($.trim(codeElement.html())) // trim to avoid spaces
      .wrapInner(kbWrapper(lang)); // wrap in code block

    // wish this could be done using highlight.js -__- language detection
    if (lang === 'shell') {
      codeElement.addClass('terminal');
    }
    
    const innerCode = codeElement.find('.hljs');

    // hightlight code (auto detect if needed)
    hljs.highlightBlock(innerCode);

    if (lineNumbers) {
      hljs.lineNumbersBlock(innerCode);
    }
  });
}

function kbWrapper(lang) {
  return `<div class="kb-scroller"><pre><code class="hljs ${lang || ''}"></code></pre></div>`;
}
