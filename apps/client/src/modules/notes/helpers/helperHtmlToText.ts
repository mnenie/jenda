export function helperHtmlToText() {
  const htmlH1ToText = (htmlH1: string) => {
    const temp = document.createElement('div')
    temp.innerHTML = htmlH1
    const titles = temp.querySelectorAll('h1')
    const firstTitle = titles[0]
    if (firstTitle) {
      return firstTitle.textContent!
    }
    else {
      return 'Untitled'
    }
  }

  const htmlContentToText = (htmlContent: string) => {
    const temp = document.createElement('div')
    temp.innerHTML = htmlContent
    const paragraph = temp.querySelector('p')
    if (paragraph) {
      return paragraph.textContent!
    }
    else {
      return ''
    }
  }

  return {
    htmlH1ToText,
    htmlContentToText,
  }
}
