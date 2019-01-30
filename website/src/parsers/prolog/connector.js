function parse(code, options) {
  options = options || {}
  options.uri = options.uri || '/'

  var lineLengths = code.split('\n').map(line => line.length);
  var accumulatedLineLengths = accumulate(lineLengths)

  return fetch(options.uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: code.toString()
  }).then(function (response) {
    return response.json()
  }).then(function (ast) {
    return addPositions(ast, accumulatedLineLengths)
  })
}

function addPositions(ast, accLineLengths) {
  var position

  for (var key in ast) {
    if (key === 'loc' && accLineLengths) {
      position = calculatePosition(ast[key], accLineLengths)
      ast.loc.start.pos = position[0]
      ast.loc.end.pos = position[1]
    } else if (typeof ast[key] === 'object') {
      addPositions(ast[key], accLineLengths)
    }
  }

  return ast
}

function accumulate (accLineLengths) {
  var res = []
  var acc = 0
  accLineLengths.forEach(l => {
    res.push(acc)
    acc += l+1
  })
  return res
}

function calculatePosition (location, accLineLengths) {
  return [ location.start, location.end ].map(pos => {
    return accLineLengths[pos.line-1] + pos.column
  })
}

module.exports = parse
