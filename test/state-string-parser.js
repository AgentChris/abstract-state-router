var test = require('tape-catch')
var parse = require('../lib/state-string-parser')

function testParsing(t, input, output) {
	t.deepEqual(parse(input), output, input + ' produces ' + output.length + ' results')
}

var TESTS = [
	['butts', ['butts']],
	['butts.lol', ['butts', 'butts.lol']],
	['butts rofl.wat.ok', ['butts rofl', 'butts rofl.wat', 'butts rofl.wat.ok']]
]

test('state string parser', function(t) {
	t.plan(TESTS.length)
	TESTS.forEach(function(ary) {
		testParsing(t, ary[0], ary[1])
	})
})
