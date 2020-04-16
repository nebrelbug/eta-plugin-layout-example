var layoutRegExp = /^@\s*layout\s*\(\s*"([^]*)"\)$/

module.exports = {
  processAST: function (buffer, env) {
    var firstItem = buffer[0]
    if (firstItem.t === 'e') {
      var val = firstItem.val.trim()

      if (layoutRegExp.test(val)) {
        buffer.shift()
        var layoutMatch = layoutRegExp.exec(val)
        var filePath = layoutMatch[1]

        var useLayoutCode =
          'tR=' +
          (env.async ? 'await ' : '') +
          'E.includeFile("' +
          filePath +
          '",{content:tR})'
        buffer.push({ t: 'e', val: useLayoutCode })
      }
    }
    return buffer
  }
}
