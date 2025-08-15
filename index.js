function wmap(selector) {
  return new Proxy(
    {},
    {
      get(_,/**@type {string}*/ idWithDollar) {
        const id = idWithDollar.slice(1);
        return selector(`#${String(id)}`);
      },
    }
  );
}

module.exports = { wmap };
module.exports.wmap = wmap;
module.exports.default = wmap;
