// Assuming the JSON data is assigned to a variable named `itemsData`
let itemsData = {
    "item": [
        {
      "name": "Medallion of Gargoyles",
      "source": "AspysGuidetoInfinitum",
      "rarity": "rare",
      "reqAttune": true,
      "wondrous": true,
      "recharge": "dawn",
      "entries": [
        "This stone medallion is shaped like a grotesque head. While wearing this item, you can use your action to summon a pair of {@creature Gargoyle|MM|gargoyles} that emerge from a piece of stone that you can see within range. A {@creature gargoyle|MM} summoned by this amulet disappears when it drops to 0 hit points or after 1 hour.",
        "The summoned {@creature Gargoyle|MM|gargoyles} are friendly to you and your companions. Roll initiative for them as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures but otherwise take no actions.",
        "Once the medallion is used, it can't be used again until the next dawn."
      ]
    },
    {
      "name": "The Memory Crystal",
      "source": "AspysGuidetoInfinitum",
      "rarity": "artifact",
      "reqAttune": false,
      "weight": 3,
      "wondrous": true,
      "entries": [
        "Made of a clear and smooth polished glass, this crystal ball is perfectly spherical. While holding it with both hands, you can as an action cause one of the following effects to occur:",
        {
          "type": "entries",
          "name": "Project",
          "entries": [
            "A spectral door forms in the center of the crystal. A creature can open this door and enter the crystal with an action. When a creature enters the crystal this way, the last memory stored inside it will start to play.",
            "Once the memory is concluded, the creature appears in an unoccupied space within 5ft of the crystal."
          ]
        },
        {
          "type": "entries",
          "name": "Protect",
          "entries": [
            "As an action, you can cause the crystal to take on a pearly white color. While the crystal is in this state and as long as you are holding it with both hands, you are immune to psychic damage, any effect that would sense your emotions or read your thoughts, divination spells, and the charmed condition."
          ]
        },
        "You may replace the memory stored within by casting {@spell modify memory} into the crystal. The crystal can hold a total of 60 minutes of one memory. When you cast the spell, you must specify the exact time from when the memory starts. When a creature’s memory is in this crystal, projections occur from the point of view of the caster.",
        "Additionally, you may store the memory of a location in the crystal by physically being present in the location and casting modify memory. A location’s memory is available as an explorable space to any creature using “Project”. From the area where the memory begins, a creature can travel upto 100ft in any direction before the edges of the crystal appear."
      ]
    },
    {
      "name": "Half Plate of Seamless Percussion",
      "source": "AspysGuidetoInfinitum",
      "type": "MA",
      "rarity": "very rare",
      "reqAttune": true,
      "weight": 40,
      "ac": 15,
      "genericVariant": {
        "name": "Mithral Armor",
        "source": "DMG"
      },
      "stealth": false,
      "bonusAc": "+2",
      "entries": [
        "This Half Plate Armor is made of a mix of soft jet-black, shaped mithral plates and smooth dark brown leather. The plates themselves can be heard vibrating with a low hum when the armor is held to the close to the ear. While wearing this armor, you have a +2 bonus to Armor Class.",
        "This armor has two functioning modes (Frequency shift and Resonance) and you can switch between them as part of a long rest.",
        {
          "type": "entries",
          "name": "Frequency Shift",
          "entries": [
            "If you are hit with an attack while attuned to this armor, you can as a reaction switch the frequency of the vibrating plates to negate some of the damage. Roll {@dice 3d8} and subtract that from the damage dealt to you for that attack, unless it is psychic damage. You can adjust the frequency of this armor a number of times equal to your proficiency modifier+1. Your uses recharge after a long rest."
          ]
        },
        {
          "type": "entries",
          "name": "Resonance",
          "entries": [
            "As a bonus action, you can attune the plates' frequency to the natural frequency of a single melee or ranged weapon. Thrown weapons cannot be affected this way. When the armor is attuned this way, your attacks with that weapon deal an extra {@dice 1d6} damage for 1 minute. During this time and till your next long rest, you also make Dexterity (Stealth) checks at disadvantage as the plates slowly realign. You can use this feature twice and your uses recharge after a long rest."
          ]
        },
        "Mithral is a light, flexible metal. A mithral chain shirt or breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn't."
      ]
    },
    {
      "name": "Studded Leather Armor of Leaping Fire",
      "source": "AspysGuidetoInfinitum",
      "type": "LA",
      "rarity": "rare",
      "reqAttune": true,
      "weight": 13,
      "ac": 12,
      "armor": true,
      "entries": [
        "The Regal looking set of armor is made from the pelt of a {@creature Noon Wolf|AspysGuidetoInfinitum}. Streaks of red flame shoot through the armor in periodic intervals warming those in the close vicinity of the armor. ",
        "While wearing this armor, you have a +1 bonus to Armor Class, and you have resistance to fire damage.",
        {
          "type": "entries",
          "name": "Leaping Fire",
          "entries": [
            "If you take more than 30 points of damage during a single creature's turn, the armor splits dealing 3d6 fire damage to each creature in a 5ft radius. The fire spit out then gathers into a {@creature fire elemental} as if you had cast the {@spell Summon Elemental} spell, overiding any spell you were concentrating on. The fire elemental is friendly to you and your allies as long as you hold concentration. For the duration of the spell or as long as the elemental is alive, the armor loses the fire resistance trait. The armor can split in this manner once and will not summon a fire elemental until the next dawn."
          ]
        },
        "Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes."
      ],
      "attachedSpells": [
        "Summon Elemental"
      ]
    },
    {
      "name": "Longsword of Malice",
      "source": "AspysGuidetoInfinitum",
      "type": "M",
      "rarity": "rare",
      "weight": 3,
      "weaponCategory": "martial",
      "property": [
        "V"
      ],
      "dmg1": "1d8",
      "dmgType": "S",
      "dmg2": "1d10",
      "sword": true,
      "weapon": true,
      "reqAttune": "by a neutral or evil creature",
      "entries": [
        "This longsword seems to me made of a rough dark metal. It does not shine to light.",
        "You have a +2 to attacks and damage rolls made with this weapon. A creature attuned to this weapon can hear quiet laughing coming from the blade",
        {
          "type": "entries",
          "name": "Ill will",
          "entries": [
            "When you take the attack action, you can choose to imbue this weapon with malice. On the next attack that hits, you deal this weapons normal damage and subject the target to the effects of the {@spell Harm} spell (DC 15). Once this ability is used, you cannot use it again before before a long rest. You can use a short rest to recharge this ability if you use 10 of your hit dice. You receive no healing from those hit dice but this feature is recharged."
          ]
        },
        {
          "type": "entries",
          "name": "Lesser Curse of Corruption",
          "entries": [
            "Murderous tendencies begin to seep into the thoughts of the creature that attunes to this weapon. At the end of every 14 non-continuous days that it is attuned to this weapon, it needs to make a DC 15 Wisdom saving throw. Failing this saving throw will cause its alignment to shift one step toward evil (good to neutral, neutral to evil). If the creature is already of an evil alignment, its alignment will move one step toward chaotic evil."
          ]
        }
      ],
      "bonusWeapon": "+2"
    },
    {
      "name": "Greataxe of Despair",
      "source": "AspysGuidetoInfinitum",
      "baseItem": "greataxe|phb",
      "type": "M",
      "rarity": "very rare",
      "reqAttune": "by a neutral or evil creature",
      "weight": 7,
      "weaponCategory": "martial",
      "property": [
        "H",
        "2H"
      ],
      "dmg1": "1d12",
      "dmgType": "S",
      "bonusWeapon": "+3",
      "entries": [
        "This great-axe is made of a metal-oil amalgam. It shimmers to light as if it is coated in a layer of slick. You have a +3 bonus to attack and damage rolls made with this weapon. When attacking a creature that is making death saving throws with this weapon, 3 death save failures are inflicted intead of 2.",
        "While attuned to this weapon, you can sense sorrow and despair in creatures that you can see. As an action, you can instil additional despair into a mind. The creature must make a DC 16 Wisdom saving throw or attack rolls made against it with this weapon are at advantage until it is reduced to 0 hitpoints.",
        {
          "type": "entries",
          "name": "Fickle hope",
          "entries": [
            "When you take the attack action, you can choose to imbue this weapon with malice. On the next attack that hits, you deal this weapons normal damage and subject the target to the effects of the {@spell Power Word Pain} spell (DC 16). The hitpoint limit for this casting is removed. Once this ability is used, you cannot use it again before before a long rest. You can use a short rest to recharge this ability if you use 15 of your hit dice. You receive no healing from those hit dice but this feature is recharged."
          ]
        },
        {
          "type": "entries",
          "name": "Curse of Corruption",
          "entries": [
            "Murderous tendencies begin to seep into the thoughts of the creature that attunes to this weapon. At the end of every 7 non-continuous days that it is attuned to this weapon, it needs to make a DC 18 Wisdom saving throw. Failing this saving throw will cause its alignment to shift one step toward evil (good to neutral, neutral to evil). If the creature is already of an evil alignment, its alignment will move one step toward chaotic evil."
          ]
        }
      ],
      "attachedSpells": [
        "Power Word Pain"
      ]
    },
    {
      "name": "Music Box (Ostinato)",
      "source": "AspysGuidetoInfinitum",
      "rarity": "rare",
      "wondrous": true,
      "weight": 1,
      "entries": [
        "This music box is made of a fine polished wood. Opening it plays a nice repetitive catchy tune that can often find itself seated in the minds of those that hear it.",
        {
          "type": "entries",
          "name": "Summon Ostinato.",
          "entries": [
            "As an action, you can draw out the essence of music from this box and manifest it as an invisible creature. The summoned creature is controlled by the one that summoned it and it rolls its own initiative in combat. If the {@creature Ostinato|AspysGuidetoInfinitum} uses Aural symbiosis, it is unable to take actions other than Voracious Aura.",
            "If the ostinato is reduced to 0 hitpoints, it goes back into the box and cannot be summoned before a long rest."
          ]
        }
      ]
    },
    {
      "name": "Loon",
      "source": "AspysGuidetoInfinitum",
      "rarity": "legendary",
      "reqAttune": true,
      "wondrous": true,
      "entries": [
        "This brown loincloth is made of a soft silky fabric that is jagged at the edges. When worn by a creature, their AC increases by as much as their constitution modifier. However, A creature with a negative constitution modifier will have their AC decreased by the modifier.",
        "This AC bonus is removed temporarily when the attuned creature dons armor. Shields may be used however."
      ]
    },
    {
      "name": "Verdant fabric of the Tree Walker",
      "source": "AspysGuidetoInfinitum",
      "bonusAc": "+3",
      "baseItem": "studded leather armor|PHB",
      "type": "LA",
      "rarity": "legendary",
      "reqAttune": "by a creature that bears the mark of Ventari",
      "weight": 13,
      "ac": 12,
      "entries": [
        "This fabric rests as a pile of leaves when it is not worn. As an action, an attuned creature can will the leaves to form as armor or an item of clothing such as a scarf, a jacket, a cape or a hat if the leaves are within 30ft or doff it back to a pile of leaves to a location within 30ft.",
        "While wearing this as armor, you have a +3 bonus to Armor Class. Additionally, when in areas of thick vegetation or near a tree, you have advantage on Dexterity(stealth) check",
        "When you take a short or long rest and when you attune to this fabric, you must choose a season to attune the fabric to. You can choose between Winter, Spring, Summer and autumn.\n\nYou get resistance of damage of a certain type associated with the fabric. Summer (Fire), Spring (Radiant), Winter (Cold), Autumn (Necrotic)",
        {
          "type": "entries",
          "name": "Plant phase",
          "entries": [
            "As an action while wearing this fabric, you can cast either of the following spells, Tree stride or Transport via plants once a day. If any of the effects require a DC, the DC is 15.",
            {
              "type": "entries",
              "name": "Tree stride",
              "entries": [
                "You cast the {@spell tree stride} spell with this fabric. In addition to the effects of the spell, you gain an an additional effect based on the season the fabric is attuned to.",
                {
                  "type": "list",
                  "items": [
                    "Winter. Once a turn, on the first attack you make when you walk out of a tree, you can add an additional 5d4 cold damage",
                    "Spring. Once a turn, when you walk out of a tree, you can force a creature you can see within 10ft of you to make a Wisdom saving throw. On a failure, the creature is charmed. If you or your allies are currently engaged in hostilities with the target creature, it makes the save with advantage.",
                    "Summer. Once a turn, the first attack you make when you walk out of a tree, is with advantage.",
                    "Autumn. Once a turn, when you walk out of a tree, you can force a creature you can see within 30ft of you to make a Charisma saving throw. On a failure, you can move the creature upto 20ft in any direction."
                  ]
                }
              ]
            },
            {
              "type": "entries",
              "name": "Transport via plants",
              "entries": [
                "You cast the {@spell Transport via plants} spell."
              ]
            }
          ]
        },
        {
          "type": "entries",
          "name": "Germinate",
          "entries": [
            "As an action, pick two spots on the ground that are within 40ft of you and within 40ft of each other. The fabric releases two spores that strike each of these chosen locations. At the start of your next turn, these two spores grow into two similar looking oak trees of 100ft height and 5ftx5ft width. The trees wither and die after one hour."
          ]
        },
        {
          "type": "entries",
          "name": "Speak with plants",
          "entries": [
            "While wearing this fabric, you can always talk to plants."
          ]
        }
      ]
    },
    {
      "name": "The Bad News",
      "source": "AspysGuidetoInfinitum",
      "type": "R",
      "rarity": "unknown",
      "weight": 25,
      "weaponCategory": "martial",
      "age": "renaissance",
      "property": [
        "A",
        "LD",
        "2H"
      ],
      "range": "200/800",
      "dmg1": "2d12",
      "dmgType": "P",
      "firearm": true,
      "misfire": 3,
      "entries": [
        "The bad news is a firearm with a long barrel and a chamber capable of firing ammunition twice as large compared to a musket.",
        {
          "type": "entries",
          "name": "Heavy Barrel",
          "entries": [
            "If the bad news is used as an improvised weapon, the damage die used is a 1d10 instead of a 1d4"
          ]
        },
        {
          "type": "entries",
          "name": "Prone sniper",
          "entries": [
            "The barrel of the bad news is fitted with fitted with two stands that extend when you go prone to provide stability to the firearm, negating the disadvantage caused on attacks while prone."
          ]
        },
        {
          "type": "entries",
          "name": "Unconcealable",
          "entries": [
            "The size of the Bad news makes it nearly impossible to hide on the person of a medium or smaller creature of height 5ft or lower."
          ]
        },
        {
          "type": "entries",
          "name": "Twice-forged steel",
          "entries": [
            "The refined make of the Bad News resists mishaps like misfiring. The first time that you misfire after a long rest is negated by the firearm."
          ]
        }
      ]
    },
    {
      "name": "Vastavikta, The Reality Monger",
      "source": "AspysGuidetoInfinitum",
      "type": "M",
      "rarity": "artifact",
      "weight": 2,
      "weaponCategory": "martial",
      "property": [
        "H",
        "2H"
      ],
      "dmg1": "2d6",
      "dmgType": "S",
      "sword": true,
      "weapon": false,
      "reqAttune": "by a Paladin/Zealot Barbarian of Good/Neutral Alignment",
      "bonusWeapon": "+4",
      "entries": [
        "This Sword was forged in the divine realms and entrusted to a hero who was on a quest to quell the consequence of the Arcane Aftermath. This Sword was one of three boons that graced the world after the reality morphing event changed the face of Fer.",
        "The Blade resembles a relatively thin greatsword, with a hilt that looks like the inside of an atom. Despite its thin form, there is an intricate series of deep carvings in arcane script around the blade, removing just enough weight that it vibrates in constant pitch when struck. The runes also cause a dull glow that sheds dim light upto 15 feet in all directions. As a bonus action, the wielder can channel the blade’s energy to shed bright light in a 30ft radius.",
        "Whenever a creature whose reality was altered, such as with the wish spell, time travel or as determined by the DM comes within 60ft of this blade, sweet celestial music permeates the atmosphere as the blade begins to mildly vibrate.  ",
        "You have a +3 bonus to attack and damage rolls made with this magic weapon.",
        "When you hit with an attack using this weapon, the target takes an extra {@dice 1d8} force damage as the blade vibrates and churns the insides of the target.",
        "The Blade has a pool of 15 charges when attuned to. Charges can be spent to do a number of things. At the end of a long rest, roll a {@dice d20}. On a 20, it regains all charges and has an additional 10 charges. On a 1, it regains 5 charges. On other rolls, it regains {@dice 1d12+3} charges upto 15.",
        {
          "type": "entries",
          "name": "Wrathful Reality",
          "entries": [
            "You can expend a number of charges to deal extra damage against creatures. As a bonus action, you can charge the weapon's persussion with a frequency. Next time you hit a creature with a weapon attack before a short or long rest, You deal 1d8 psychic damage and an extra 1d8 for each charge loaded upto 5 charges. 2d8 if the creature is reality altered."
          ]
        },
        {
          "type": "entries",
          "name": "Paranoia's End",
          "entries": [
            "After a long rest and before charges have been regained, Choose 7 levels of spells from the {@filter wizard spell list upto level 5|spells|level=1|level=2|level=3|level=4|level=5|class=Wizard}. You can cast these spells through this sword by spending spell level*2 number of charges without the need for any material components."
          ]
        },
        {
          "type": "entries",
          "name": "Arcane Sentinel",
          "entries": [
            "You always know the spell detect magic and can cast it using 1 charge. The radius is doubled and on spending another charge, your range becomes uninterrupted."
          ]
        },
        {
          "type": "entries",
          "name": "Vicinity breeds affinity, affinity breeds power, power yearns vicinity.",
          "entries": [
            "As long as one of the other 2 weapons of the arcane aftermath get within 1000ft of this weapon, the creature attuned to it always knows the direction to the weapon.",
            "Once all three weapons of the arcane aftermath are within 30ft of eachother, they fuse with the creatures they are attuned to. All creatures attuned to these weapons recieve a +2 to any ability of thier choice. Make the following changes to Vastavikta.",
            {
              "type": "list",
              "items": [
                "Attacks and Damage rolls get a +4 bonus.",
                "Wrathful Reality's charge limit increases to 7 charges.",
                "The extra damage increases to 1d12."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Ápeiro, the Keen Mantle",
      "source": "AspysGuidetoInfinitum",
      "rarity": "artifact",
      "reqAttune": "by a wizard or a creature with the spellcasting feature",
      "wondrous": true,
      "entries": [
        "This cloak was forged in the divine realms and entrusted to a hero who was on a quest to quell the consequence of the Arcane Aftermath. This Cloak was one of three boons that graced the world after the reality morphing event changed the face Fer.",
        "The cloak in apprance resembles an old, grey mantle with a cape of velvet cloth. Plain grey with a belt of a darker grey. It's jagged at the edges and it looks like it was torn at the base. The wearer feels eons of knowledge coursing through the cloak. Arcane scribblings come to you instantly as if the cloak made of parchment. You can use the cloak to channel any {@filter Wizard spell of lvl5 and below|spells|level=1|level=2|level=3|level=4|level=5|class=Wizard} once a day and cast it without material components. As long as you are wearing this cloak and have enough materials, you can copy the channeled spell into your spellbook.",
        "While you are wearing this cloak, you gain a +3 bonus to spell attack rolls and spell save DC. You also ignore half and three quarters cover when making a spell attack.",
        "Additionally, you gain expertise in any one of the intelligence skills you are proficient in.",
        "This cloak has a pool of 15 charges when attuned to. Charges can be spent to do a number of things. At the end of a long rest, roll a {@dice d20}. On a 20, it regains all charges and has an additional 10 charges. On a 1, it regains 5 charges. On other rolls, it regains {@dice 1d12+3} charges upto 15.",
        {
          "type": "entries",
          "name": "Knowledge of the eons",
          "entries": [
            "You get the {@feat keen mind} feat as long as you are attuned to this cloak. If you already have the keen mind feat, you may choose a different feat while you attune to it. You may choose a different feat everytime you attune to this cloak but you must meet the pre-requisites for the feat."
          ]
        },
        {
          "type": "entries",
          "name": "Offensive barrier",
          "entries": [
            "After a long rest, when you roll to regain charges, choose an element type and the cloak attunes to it. For the rest of the day, you are immune to this damage type, and when you cast a spell that rolls damage die of that element, the damage ignores resistance and immunity of the affected creature.",
            "Additionally, When you roll for damage of the attuned type, you can spend 1 charge to reroll a number of the damage dice up to 4+Spell level. You must use the new rolls. If the damage type is different, you can reroll upto 4 damage dice.",
            "As a bonus action/Reaction(when you take damage) you can spend 4 charges to gain resistance to another element and gain the benefits of casting spells of that type. Doing so will drop your immunity to the first damage type."
          ]
        },
        {
          "type": "entries",
          "name": "Arcane Sentinel",
          "entries": [
            "You always know the spell detect magic and can cast it using 1 charge. The radius is doubled and on spending another charge, your range becomes uninterrupted."
          ]
        },
        {
          "type": "entries",
          "name": "Vicinity breeds affinity, affinity breeds power, power yearns vicinity.",
          "entries": [
            "As long as one of the other 2 weapons of the arcane aftermath get within 1000ft of this weapon, the creature attuned to it always knows the direction to the weapon.",
            "Once all three weapons of the arcane aftermath are within 30ft of eachother, they fuse with the creatures they are attuned to. All creatures attuned to these weapons recieve a +2 to any ability of thier choice. Make the following changes to Ápeiro.",
            {
              "type": "list",
              "items": [
                "Spell attack rolls bonus increases to a +4 and Spell Save DC increases to a +4.",
                "Arcane Absorption. If you cast a spell that requires concentration while you already concentrating on a spell, the initial spell doesn't drop but instead becomes duration-based for half the concentration duration."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Backbiter, The existential Crisis",
      "source": "AspysGuidetoInfinitum",
      "baseItem": "dagger|PHB",
      "type": "M",
      "rarity": "artifact",
      "reqAttune": "by a creature neutral/evil alignment)",
      "weight": 1,
      "weaponCategory": "simple",
      "property": [
        "F",
        "L",
        "T"
      ],
      "range": "20/60",
      "dmg1": "1d4",
      "dmgType": "P",
      "bonusWeapon": "+4",
      "entries": [
        "This dagger was forged in the divine realms and entrusted to a hero who was on a quest to quell the consequence of the Arcane Aftermath. This Dagger was one of four weapons that graced the world after the reality morphing event changed the face of Fer.",
        "This dagger shines as if it's made of satin fabric and yet, looks like it has an edge that can cut through bone. This blade shifts in and out of visibility for everyone except the one holding and attuned to it. Anyone who cannot see the dagger directly forgets about it's existence and all memories associated with it are rationalised into different narratives.",
        "You have a +3 bonus to attack and damage rolls made with this magic weapon.",
        "When you hit with an attack using this weapon, the target takes an extra {@dice 1d8} Necrotic damage as the wound seeps with dark energies of the 9 hells",
        "This dagger has a pool of 15 charges when attuned to. Charges can be spent to do a number of things. At the begining of a day, roll a {@dice d20}. On a 20, it regains all charges and has an additional 10 charges. On a 1, it regains 5 charges. On other rolls, it regains {@dice 1d12+3} charges upto 15.",
        {
          "type": "entries",
          "name": "In Baator, Hide",
          "entries": [
            "In darkness, dim light or in Baator, the dagger draws in the shadows and clouds you from the untrained eye. While this is in effect, and if you have advantage on Dexterity checks, you can reroll one of the dice once."
          ]
        },
        {
          "type": "entries",
          "name": "Rend Memory",
          "entries": [
            "As an action, you can spend 2 charges to feint the target and make an attack against the target. When you expend charges this way, the target forgets about the existence of the dagger, assuming you are about to make an unarmed attack. The attack is considered a surprise attack. A creature already affected by this once in a 24h period is immune to the surprise and consequent uses just have advantage.",
            "The dagger pulses inside the target for that attack and you can use your bonus action and spend 10 more charges to make the target forget one creature for 1h. Even if the target can see the creature, they see nothing."
          ]
        },
        {
          "type": "entries",
          "name": "Blink",
          "entries": [
            "You can expend 2 charges to cast misty step as a bonus action."
          ]
        },
        {
          "type": "entries",
          "name": "Arcane Sentinel",
          "entries": [
            "You always know the spell detect magic and can cast it using 1 charge. The radius is doubled and on spending another charge, your range becomes uninterrupted."
          ]
        },
        {
          "type": "entries",
          "name": "Vicinity breeds affinity, affinity breeds power, power yearns vicinity.",
          "entries": [
            "As long as one of the other 3 weapons of the arcane aftermath get within 1000ft of this weapon, the creature attuned to it always knows the direction to the weapon.",
            "Once all four weapons of the arcane aftermath are within 30ft of eachother, they fuse with the creatures they are attuned to. All creatures attuned to these weapons recieve a +2 to any ability of thier choice. Make the following changes to Backbiter.",
            {
              "type": "list",
              "items": [
                "Attacks and Damage rolls get a +4 bonus.",
                "You can chose to turn invisible while holding the dagger as an action. Anything you are wearing or carrying is invisible with you. You remain invisible until you sheath the dagger, until you attack or cast a spell, or until you use a bonus action to become visible again.",
                "The extra damage increases to 1d12."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Sanjeevani, The nourishing recurve",
      "source": "AspysGuidetoInfinitum",
      "type": "R",
      "rarity": "artifact",
      "weight": 2,
      "weaponCategory": "simple",
      "property": [
        "A",
        "2H"
      ],
      "range": "80/320",
      "dmg1": "1d6",
      "dmgType": "P",
      "bow": true,
      "weapon": true,
      "ammoType": "arrow|phb",
      "bonusWeapon": "+4",
      "entries": [
        "This Bow was forged in the divine realms and entrusted to a hero who was on a quest to quell the consequence of the Arcane Aftermath. This Bow was one of three weapons that graced the world after the reality morphing event changed the face of Fer. ",
        "This bow, seemingly made of polished and engraved wood is not what it looks like. To the touch, it feels like holding warmth. This warmth finds its way deep inside the mind of the creature it's attuned to. This resting warmth allows the user to be proficient and choose either dexterity or thier spellcasting ability modifier to make attack and damage rolls.",
        "Area around this crossbow gradually sprouts shrubbery and grass. If left resting for a longer period of time, the nourishing energy becomes potent enough to sustain a little forest.",
        "When a creature within the inner range of this bow you can see rolls dice to regain hitpoints, you can use your reaction to reroll any number of that dice.",
        "You have a +3 bonus to attack and damage rolls made with this magic weapon.",
        "When you hit with an attack using this weapon, the target takes an extra {@dice 1d8} force damage as vines begin to originate and wrap around the target.",
        "This bow has a pool of 15 charges when attuned to. Charges can be spent to do a number of things. At the begining of a day, roll a {@dice d20}. On a 20, it regains all charges and has an additional 10 charges. On a 1, it regains 5 charges. On other rolls, it regains {@dice 1d12+3} charges upto 15.",
        {
          "type": "entries",
          "name": "Cleansing flame",
          "entries": [
            "When you take the attack action on your turn, you can use one or more of the attacks to target an ally instead. Spend 2 charges per attack. Do not roll for attack. Half way through its trajectory, the arrow shot disintegrates in flame that extinguishes by the time it reaches its target, the final few embers of flame washing over the target. The target gains the benefit of a casting of {@spell cure wounds} at lvl1."
          ]
        },
        {
          "type": "entries",
          "name": "Nature magic",
          "entries": [
            "After a long rest and before charges have been regained, Choose 7 levels of spells from the {@filter druid spell list upto level 5|spells|level=1|level=2|level=3|level=4|level=5|class=Druid}. You can cast these spells through this bow by spending level*2 number of charges without the need for any material components."
          ]
        },
        {
          "type": "entries",
          "name": "Arcane Sentinel",
          "entries": [
            "You always know the spell detect magic and can cast it using 1 charge. The radius is doubled and on spending another charge, your range becomes uninterrupted."
          ]
        },
        {
          "type": "entries",
          "name": "Vicinity breeds affinity, affinity breeds power, power yearns vicinity.",
          "entries": [
            "As long as one of the other 3 weapons of the arcane aftermath get within 1000ft of this weapon, the creature attuned to it always knows the direction to the weapon.",
            "Once all four weapons of the arcane aftermath are within 30ft of eachother, they fuse with the creatures they are attuned to. All creatures attuned to these weapons recieve a +2 to any ability of thier choice. Make the following changes to Sanjeevani.",
            {
              "type": "list",
              "items": [
                "Attacks and Damage rolls get a +4 bonus.",
                "Cleansing flame applies Cure wounds at level 2",
                "The extra damage increases to 1d12."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Enchantment Fabric +1",
      "wondrous": true,
      "tier": "major",
      "rarity": "rare",
      "weight": 0.5,
      "entries": [
        "This soft cloth shimmers with a faint glitter. As part of a long or short rest, you can infuse this cloth with a simple or martial weapon, applying the enchantment to the weapon's attack and a damage rolls."
      ],
      "source": "AspysGuidetoInfinitum"
    },
    {
      "name": "Enchantment Fabric +2",
      "wondrous": true,
      "tier": "major",
      "rarity": "very rare",
      "weight": 0.5,
      "entries": [
        "This soft cloth shimmers with a faint glitter. As part of a long or short rest, you can infuse this cloth with a simple or martial weapon, applying the enchantment to the weapon's attack and a damage rolls."
      ],
      "source": "AspysGuidetoInfinitum"
    },
        {
      "name": "Enchantment Fabric +3",
      "wondrous": true,
      "tier": "major",
      "rarity": "very rare",
      "weight": 0.5,
      "entries": [
        "This soft cloth shimmers with a faint glitter. As part of a long or short rest, you can infuse this cloth with a simple or martial weapon, applying the enchantment to the weapon's attack and a damage rolls."
      ],
      "source": "AspysGuidetoInfinitum"
    }
    ]
};

function displayItems() {
    const container = document.getElementById('items-container');
    itemsData.item.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        let title = document.createElement('h2');
        title.textContent = item.name;
        itemDiv.appendChild(title);

        // Add other item details here
        let source = document.createElement('p');
        source.textContent = 'Source: ' + item.source;
        itemDiv.appendChild(source);

        let rarity = document.createElement('p');
        rarity.textContent = 'Rarity: ' + item.rarity;
        itemDiv.appendChild(rarity);

        let weight = document.createElement('p');
        weight.textContent = 'Weight: ' + item.rarity;
        itemDiv.appendChild(weight);

        let entries = document.createElement('p');
        entries.textContent = 'Entries: ' + item.entries;
        itemDiv.appendChild(entries);

        // Add more fields as needed

        container.appendChild(itemDiv);
    });
}

displayItems();
