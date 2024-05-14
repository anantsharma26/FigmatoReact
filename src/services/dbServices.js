import db from "../assets/db.json";

function GetdbService() {
  return db.getServices;
}

export { GetdbService };
