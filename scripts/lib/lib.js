// Send chat message
ChatMessage.create({
  content:
    "<h2> Gathering Materials </h2> Ancient [[/r 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]] <br><br> Cloth [[/r 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]] <br><br> Critters [[/r 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]] <br><br> Gemstones [[/r 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]] <br><br> Food [[/r 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]] <br><br> Metal [[/roll 2d6+@traits.arcana.value]] [[/r 2d6+@traits.fortitude.value]]<br><br> Wood [[/r 2d6+@traits.arcana.value]][[/r 2d6+@traits.fortitude.value]]",
});

/**
 * Each field is a comma-separated list of the things you want
 * to include in the result. It matches against the text you
 * enter, so a category of "s" will match skill, spell and rms.
 *
 * type: may be any of {Primary, Melee, Ranged,
 * Attack, Rollable, Defence}
 *
 * category: applies only to:
 * Rollable: {check, skill, spell, technique, rms} and
 * Defence: {dodge, parry, block}
 * and may be used without specifying the type.
 *
 * group: is a user-defined field for use in filtering
 * this result.
 *
 * Target: Any case-sensitive portion of the item name.
 */

let data = {
  position: {
    width: 300,
    top: 100,
    left: 100,
  },
  type: "",
  category: "skill,spell",
  group: "",
  target: "",
};

if (canvas.tokens.controlled.length != 1)
  return ui.notifications.error("Please select a single token first");

canvas.tokens.controlled[0].actor.rollables(data);
