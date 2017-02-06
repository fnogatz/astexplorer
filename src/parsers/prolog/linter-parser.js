import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'prolog-parser/package.json';

const ID = 'prolog-parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/fnogatz',
  locationProps: new Set(['loc']),

  loadParser(callback) {
    require(['prolog-parser'], callback);
  },

  parse(prologParser, code) {
    return prologParser(code, {
      uri: 'http://localhost:8081/'
    });
  },

  getNodeName(node) {
    return node.type;
  },

  opensByDefault(node, key) {
    return key === 'program';
  },

  nodeToRange({ loc }) {
    if (loc) {
      return [loc.start.pos, loc.end.pos];
    }
  },

};
