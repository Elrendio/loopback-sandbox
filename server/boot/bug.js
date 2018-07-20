const PERSISTED_EXAMPLE = {
  id: "myId",
}
module.exports = async function (app) {
  await app.models.MyPersistedModel.create(PERSISTED_EXAMPLE)
  console.log(await app.models.MyPersistedModel.find())
}
