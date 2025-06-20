import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 30 }); // 30 segundos de vida

export default cache;
