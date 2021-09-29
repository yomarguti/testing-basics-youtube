const {
  add,
  isNull,
  checkValue,
  createUser,
  fetchUser,
} = require("./functions");

/* beforeEach(() => {
  initDatabase();
});

afterEach(() => {
  closeDatabase();
}); */

const initDatabase = () => console.log("Database initialized...");
const closeDatabase = () => console.log("Database closed...");

describe("Joined tests", () => {
  beforeEach(() => {
    initDatabase();
  });
  test("should 2 + 2 equal to 4", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("should 2 + 2 NOT equal to 5", () => {
    expect(add(2, 2)).not.toBe(5);
  });
});

test("should be null", () => {
  expect(isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(checkValue(0)).toBeFalsy();
});

test("should be Yomar Gutierrez object", () => {
  expect(createUser()).toEqual({ firstname: "Yomar", lastname: "Gutierrez" });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 500;

  expect(load1 + load2).toBeLessThan(1600);
});

test("should be no I in team", () => {
  expect("teams").not.toMatch(/I/i);
});

test("should Admin be in usernames", () => {
  const usernames = ["Jhon", "Karen", "admin"];
  expect(usernames).toContain("admin");
});

test("should user name fetched be Leanne Graham", () => {
  expect.assertions(1);
  return fetchUser().then((data) => {
    expect(data.name).toBe("Leanne Graham");
  });
});

test("should user name fetched be Leanne Graham", async () => {
  const data = await fetchUser();
  expect(data.name).toBe("Leanne Graham");
});
