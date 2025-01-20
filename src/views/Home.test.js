import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Home from "./Home.vue";
import { nextTick } from "vue";

describe("Home", () => {
  vi.mock('../stores/user', () => ({
    useUserStore: () => ({
      user: 'aaa',
      getUser: () => {}
    }),
  }));

  it("renders the component correctly", () => {
    const wrapper = mount(Home);

    expect(wrapper.find("h1").text()).toBe("Welcome to the Home Page");
  });

  it("increments counter when button is clicked", async () => {
    const wrapper = mount(Home);

    expect(wrapper.find("#counter").text()).toContain("Counter: 1");

    await wrapper.find("#counter-btn").trigger("click");

    expect(wrapper.find("#counter").text()).toContain("Counter: 2");
  });
});
