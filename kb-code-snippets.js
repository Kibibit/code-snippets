$(document).ready(function () {
  kbCodeSnippet();
});

function kbCodeSnippet(selector, scrollbarTheme) {
  $(selector || '.kb-code').each(function (i, block) {
    const codeElement = $(block);
    const lang = (codeElement.attr('data-lang') || '').toLowerCase();
    const lineNumbers = !!codeElement.attr('data-lines');
    codeElement
      .text($.trim(codeElement.text())) // trim to avoid spaces
      .wrapInner(kbWrapper(lang)); // wrap in code block

    // wish this could be done using highlight.js -__- language detection
    if (lang === 'shell') {
      codeElement.addClass('terminal');
    }

    // hightlight code (auto detect if needed)
    hljs.highlightBlock(block);

    if (lineNumbers) {
      hljs.lineNumbersBlock(block);
    }
  });
}

function kbWrapper(lang) {
  return `<div class="kb-scroller"><pre><code class="hljs ${lang || ''}"></code></pre></div>`;
}
