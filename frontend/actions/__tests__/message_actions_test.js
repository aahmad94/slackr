import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../message";
import * as ApiUtil from "../../utils/message";

import testMessage from "../../testUtils/message_helper";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("actions", () => {
  test("receiveMessage should create an action to receive a message", () => {
    const expectedAction = {
      type: actions.RECEIVE_MESSAGE,
      message: testMessage
    };

    expect(actions.receiveMessage(testMessage)).toEqual(expectedAction);
  });
});