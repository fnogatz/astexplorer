import defaultParserInterface from '../utils/defaultParserInterface';

const ID = 'prolog-parser';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: '0.0.1',
  homepage: 'https://github.com/fnogatz',

  loadParser(callback) {
    require(['./connector'], callback);
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

  _ignoredProperties: new Set([
    '__source',
  ]),

};
