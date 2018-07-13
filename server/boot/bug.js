const PERSISTED_EXAMPLE = {
  myKey: "myVal",
  myKey2: "myVal2"
}
module.exports = async function (app) {
  let MyPersistedModel = app.models.MyPersistedModel
  await MyPersistedModel.upsertWithWhere({ myKey: "myVal" }, PERSISTED_EXAMPLE)
  await MyPersistedModel.upsertWithWhere({ myKey: "myVal" }, PERSISTED_EXAMPLE)
}
