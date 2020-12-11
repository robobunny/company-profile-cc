import callFmpApi from "./callFmpApi";
import { fakeApiData } from "../../classes/fakeApiDataForTests";

describe("callFmpApi", () => {
  test("gets data from the Api", async () => {
    fetch.mockImplementation(() => {
      return new Response(JSON.stringify(fakeApiData), { status: 200 });
    });
    const data = await callFmpApi("AAPL");
    expect(data).toEqual(fakeApiData);
  });

  test("throws error on api 404 response", async () => {
    fetch.mockImplementation(() => {
      return new Response(JSON.stringify(fakeApiData), { status: 404 });
    });
    await expect(callFmpApi("aaaA")).rejects.toThrow("There was a problem");
  });

  test("throws an error when response data is empty", async () => {
    fetch.mockImplementation(() => {
      return new Response("", { status: 200 });
    });
    await expect(callFmpApi("QXQL")).rejects.toThrow("No information");
  });
});
