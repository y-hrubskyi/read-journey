import * as Yup from "yup";

Yup.addMethod(Yup.object, "atLeastOneOf", function (list) {
  return this.test({
    name: "atLeastOneOf",
    message: "${path} must have at least one of these keys: ${keys}",
    exclusive: true,
    params: { keys: list.join(", ") },
    test: (value) => value == null || list.some((f) => !!value[f]),
  });
});

export const bookFiltersSchema = Yup.object()
  .shape({
    title: Yup.string().trim(),
    author: Yup.string().trim(),
  })
  .atLeastOneOf(["title", "author"]);
