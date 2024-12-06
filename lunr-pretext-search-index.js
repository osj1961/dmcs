var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-what",
  "level": "1",
  "url": "sec-what.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is \"discrete math\"?",
  "body": " What is \"discrete math\"?    Augustus De Morgan   Great fleas have little fleas upon their backs to bite 'em,  And little fleas have lesser fleas, and so ad infinitum .    And the great fleas themselves, in turn, have greater fleas to go on;  While these again have greater still, and greater still, and so on.    Democratus was a Greek mathematician\/philosopher. Despite the name, he doesn't seem to have much to do with the notion of democracy . He's most famous for promoting the atomic theory of matter.  Some things are clearly made up of smaller bits. Other things not so much For instance, notice how salt is made up of individual grains, but water doesn't seem to be made of smaller components. Of course, you can crush a grain of salt and get a sort of salty powder, but if your vision is good enough you can discern that this powder is made up of tiny grains. What happens if you grab some really good tweezers and crush one of those miniature grains? Do you get micro grains that, if we crush them, produce nano grains? Is it possible that this sort of thing could go on forever? Democritus said no! Materials can be broken up into smaller and smaller pieces, but there's a limit to this process. He called the smallest bits of matter atoms  which roughly means uncuttable. These days we know that atoms actually are quite cuttable they're made up of protons, neutrons and electrons, and protons and neutron themselves can be further divided into quarks   The intricacies of modern physics aren't really crucial here. The main point is simply that there is an inherent granularity to the natural world. There's a limit to how tiny things can be! A similar phenomenon is observed in quantum theory, where it turns out that quantities like energy are actually restricted to take on only certain (discrete) values. This is in marked contrast to the real numbers that Mathematicians (and Engineers!) use, where in between any two of them we can find infinitely many more. Real quantities are infinitely dissectable, whereas quantum numbers are either this value or that value and it's literally impossible for them to be anything in between.  The real world appears to be discrete! It's certainly the case that when we model something physical in a computer, that model is discrete. There's simply no way to store real numbers in a computer, because each real number would take up an infinite amount of memory! (To be fair, some real numbers can be stored with no problems. Eleven would fit into a single byte. But others, like  even though we just described it rather succinctly would need a byte for each digit in its decimal expansion. Since the decimal expansion is infinitely long, that's a lot of bytes!)  Now, all of the above isn't meant to imply that we can't deal effectively with real quantities in a computer. For instance, the C language has a data type known as a float that uses four bytes of memory to store a so-called floating point number. For many use cases, all you need are float s. If more precision, or larger (or smaller) values are needed there is the double data type which encodes a floating point number using 8 bytes. More modern languages do even better, for example, Python has libraries that implement arbitrary precision floating point numbers. But the point remains, if it's happening in a computer it is essentially discrete.  This is why budding computer scientists should study discrete mathematics, where the rules of the game are slightly different than they are in the continuous domain.  "
},
{
  "id": "sec-what-3",
  "level": "2",
  "url": "sec-what.html#sec-what-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "democracy "
},
{
  "id": "sec-what-4",
  "level": "2",
  "url": "sec-what.html#sec-what-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "atoms "
},
{
  "id": "sec-pbl",
  "level": "1",
  "url": "sec-pbl.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some challenges",
  "body": " Some challenges   A good way to get the feel for discrete math is to investigate some discrete math topics via problems.    logic puzzles  Multiple choice questions like the following are common on exams like the GRE and the LSAT.  Six students, Ann, Bob, Carla, Daryl, Emma and Frank need to be assigned to 3 groups to work on projects together. Ann and Carla refuse to work together. Bob and Emma insist on working together. If Carla and Daryl work together, they don't want anyone else in their group. Group sizes can range from 1 to 3, but there need to be three groups and everyone must be in a group.   Question 1  Suppose that Bob is in group 1 and that Carla and Daryl are in group 2. Which of the following must be true?    Ann must be in group 1.    Frank must be in group 3.    Emma must be in group 1.    Frank must be in group 2.    Ann and Frank must be in the same group.    Question 2  Suppose that Bob is in group 3 and students Carla and Daryl are in group 1, which of the following may be true?    Ann must be in group 1.    Frank is in group 1.    Emma is in group 2.    Students Ann and Frank are in the same group.    Students Emma and Daryl are in the same group.        odds   Poker is a very popular card game. If you're unfamiliar with playing cards maybe stop and consult the internet before reading on. In the most common variations of Poker each player has a hand -- a small set of cards that they can see and which are hidden from the other players. Some hands beat other hands, and if gambling is involved the player with the best hand gets to keep the other people's money. What makes one hand better than another? While there is a slightly arbitrary ranking of hands due to the ordering of the cards (a pair of threes is better than a pair of twos) the primary ranking has to do with how likely the arrangement of cards in a hand is. The lowest ranked hand is called a pair  this means there are two cards having the same face value.  For concreteness, we'll only consider hands consisting of 5 cards. Which is better, having the hand known as two pairs or the hand known as three-of-a-kind ?  There are multiple ways to answer this. If you own a fresh deck of cards there is usually one (not used in playing) that gives the odds of each possible hand. The information is also certainly available somewhere on the web. You could actually shuffle cards and deal out (say) 100 hands and keep track of how many times each type comes up. For our purposes, the best approach is to figure out how many of the possible hands A good question might be: where the heck did that number come from? contain two pairs and how many contain three-of-a-kind. Of course, you should probably give your answer a sanity check using using one of the earlier approaches.    graphs  In we see a floor plan for an Art museum. (The entrances\/exits are omitted.) Your challenge here is to determine whether or not it is possible to take a stroll through the museum, beginning and ending in the same room, and passing through each doorway exactly once.  Either find such a path, or give a convincing reason why it can't be done.   An Art museum with 6 galleries and 9 doorways in between them.      Block designs were originally created by Statisticians who wanted to scientifically analyze farm productivity. Deciding which combinations of fertilizers, pesticides, plant varieties, watering regimens, et cetera will get you the most food out of each acre of land is a worthy goal. Unfortunately, it might involve doing hundreds of different experiments. Another unfortunate complication: how do we know that the characteristics of the ground we're planting in are uniform? Maybe the soil, the rainfall, sunlight or other characteristics of the plots of land we're using influence the outcome more than the things we're trying to analyze!  The brute force approach would be to try every one of the treatments we're trying to analyze to every one of the plots. That would result in a fair bit of complexity if there are 7 plots and 7 different treatments, we'd need 49 separate sub-experiments! The main idea in the field of experimental design is to do more with less.  Suppose there are indeed 7 treatments and 7 plots of land. Can we find some way to do fewer than 49 experiments and still be able to figure out what's the best way to grow wheat? Well, of course the answer is Yes or this subsection wouldn't even exist! The main problem here is to work out a way to do only 3 experiments on each plot. Suppose the treatments are . Your task is to come up with 7 collections, of three letters each, so that the following rules are obeyed:   Each pair of collections has exactly one letter in common.  Every letter occurs in exactly 3 different collections.   There is a phrase, without loss of generality that is so common in math circles it often goes by the acronym wlog . It means that you're throwing in an assumption that makes things more concrete, but it's all good because the assumption you're making is the sort of thing that just amounts to renaming things.  In the current setting, we can say Wlog, the first collection is which is fine since whatever the three treatments are that appear in the first collection, we could just relabel everything so that they become A, B and C.  Similarly, the rules we are asked to follow assert that there will be exactly two other collections that contain A (and they can't also contain either B or C). So, wlog, the first three collections are   This is pretty cool! We're almost halfway done (wlog!) You just need to figure out the remaining four sets.   "
},
{
  "id": "subsec-odds-2",
  "level": "2",
  "url": "sec-pbl.html#subsec-odds-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Poker "
},
{
  "id": "fig-gallery",
  "level": "2",
  "url": "sec-pbl.html#fig-gallery",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " An Art museum with 6 galleries and 9 doorways in between them.   "
},
{
  "id": "sec-binary",
  "level": "1",
  "url": "sec-binary.html",
  "type": "Section",
  "number": "2.1",
  "title": "Binary",
  "body": " Binary  Computers use binary. Many of the earliest computers (machines that were way less powerful than your cellphone and weighed several tons) were analog. That means that they used variable voltages to indicate numbers and had complicated circuits using vacuum tubes Check out the Wikipedia article if you want a peek into the world of antique electronics. to do things like add or multiply voltages. Results could only be as accurate as our ability to measure voltages Storage was a problem. How do you store a voltage value and not have it leak away? Still, engineers are very clever and they managed to get analog computers to work rather well for solving real world problems over a suprising interval of time. Those early machines all had names ending in AC (UNIVAC, ENIAC, etc) which stood for Analog Computer. The germ of the idea that started the demise of the ACs was actually present in an even older technology. Steam powered machines that were used to weave silk so as to create cloth with images in it (not printed on, but woven into the fabric!) were created in the 1800s and controlled using punched cards. The machine's actions were dictated based on where certain locations in a piece of cardstock had been punched out or not.  A lovely book on the subject is Jacquard's Web: How a Hand-Loom Led to the Birth of the Information Age by James Essinger.  By the 1900s a variety of business machines and so-called teletypewriters had adopted the punch card idea. The salient point for us is this: a location on a sheet of cardstock can be punched out, or not that's binary (only two options!)  The switchover to digital computers that used binary logic voltages were either off (0 volts) or full-on (typically 5 volts) together with the discovery of transistors, lead to the relentless drive towards miniaturization and ever-increasing capabilities that has revolutionized our world over the last half-century.  So a computer person really needs to get familiar with how binary arithmetic works. Not that we need to be able to read and understand giant globs of binary (which look roughly like: 01100101000101110101001), there are tricks for quickly converting such a mess into human-readable form which we'll see in the next chapter; but philosophically, shouldn't we have a basic understanding of what's going on inside the machines we program?  Before launching off into binary, let's think for a bit about how to count to 99. You'll need a friend.  Suppose Adolph and Blanca both have ten fingers. Arbitrarily, we decide that each of Blanca's fingers are worth ten of Adolph's. We begin counting. When no one is holding any fingers up that's obviously zero. Adolph can successively hold up 1, 2, 3, et cetera fingers, but there's never a need for him to hold up more than 9 fingers because 10 is achieved by Blanca raising a single finger while Adolph lowers all of his. Interestingly, this scheme we're describing (which is, pretty transparently, just ordinary decimal numeration) really only requires digits up through 9. Nine has a very special role in base-10 numbers it's the signal that the next position has to be incremented. If Adolph and Blanca are both holding up nine fingers, we're done; unless they can recruit a friend (whose name is probably Casimir) to hold up one finger while they drop all of theirs. Yay! we made it to one hundred!  Binary, as you've probably heard, is base-2. But just as in the above example, we don't need a digit to refer to 2 we only need digits 0 and 1. In the binary numeration scheme, 1 fills the same role that 9 does in base ten. It's the signal that the digit in the next higher position should be incremented (if there isn't a next higher position we create one). So, just like the number right after 999,999 is 1,000,000 the binary number after 1111 is 10000.  While base-10 is natural for us 10-fingered humans, and base-8 would probably seem natural to octopuses, it's a bit hard to imagine a creature for whom base-2 would seem natural. But hold on, there is a pretty reasonable way to show the digits 0 and 1 with our fingers if we raise a finger, that's a 1 and if we lower it that's a 0.  "
},
{
  "id": "sec-hex-octal",
  "level": "1",
  "url": "sec-hex-octal.html",
  "type": "Section",
  "number": "2.2",
  "title": "The CS bases: 8 &amp; 16",
  "body": " The CS bases: 8 & 16  Text of section.  "
},
{
  "id": "sec-general",
  "level": "1",
  "url": "sec-general.html",
  "type": "Section",
  "number": "2.3",
  "title": "Generic bases",
  "body": " Generic bases  Text of section.  "
},
{
  "id": "sec-mod",
  "level": "1",
  "url": "sec-mod.html",
  "type": "Section",
  "number": "2.4",
  "title": "Modular arithmetic",
  "body": " Modular arithmetic  Text of section.  "
},
{
  "id": "sec-roster",
  "level": "1",
  "url": "sec-roster.html",
  "type": "Section",
  "number": "3.1",
  "title": "Roster form and set-builder notation",
  "body": " Roster form and set-builder notation  Text of section.  "
},
{
  "id": "sec-operations",
  "level": "1",
  "url": "sec-operations.html",
  "type": "Section",
  "number": "3.2",
  "title": "Set operations",
  "body": " Set operations  Text of section.  "
},
{
  "id": "sec-Venn",
  "level": "1",
  "url": "sec-Venn.html",
  "type": "Section",
  "number": "3.3",
  "title": "Venn diagrams",
  "body": " Venn diagrams  Text of section.  "
},
{
  "id": "sec-truth_tables",
  "level": "1",
  "url": "sec-truth_tables.html",
  "type": "Section",
  "number": "4.1",
  "title": "Truth tables",
  "body": " Truth tables  Text of section.  "
},
{
  "id": "sec-digital_logic_diagrams",
  "level": "1",
  "url": "sec-digital_logic_diagrams.html",
  "type": "Section",
  "number": "4.2",
  "title": "Digital logic diagrams",
  "body": " Digital logic diagrams  Text of section.  "
},
{
  "id": "sec-arguments",
  "level": "1",
  "url": "sec-arguments.html",
  "type": "Section",
  "number": "4.3",
  "title": "Argument forms",
  "body": " Argument forms  Text of section.  "
},
{
  "id": "sec-philosophy",
  "level": "1",
  "url": "sec-philosophy.html",
  "type": "Section",
  "number": "5.1",
  "title": "The philosophy of proofs",
  "body": " The philosophy of proofs  Text of section.  "
},
{
  "id": "sec-even-odd",
  "level": "1",
  "url": "sec-even-odd.html",
  "type": "Section",
  "number": "5.2",
  "title": "Proofs about even and odd numbers",
  "body": " Proofs about even and odd numbers  Text of section.  "
},
{
  "id": "sec-divisibility",
  "level": "1",
  "url": "sec-divisibility.html",
  "type": "Section",
  "number": "5.3",
  "title": "Proofs about divisibility",
  "body": " Proofs about divisibility  Text of section.  "
},
{
  "id": "sec-floor",
  "level": "1",
  "url": "sec-floor.html",
  "type": "Section",
  "number": "5.4",
  "title": "Proofs using floor and ceiling notation",
  "body": " Proofs using floor and ceiling notation  Text of section.  "
},
{
  "id": "sec-indirect",
  "level": "1",
  "url": "sec-indirect.html",
  "type": "Section",
  "number": "5.5",
  "title": "Indirect proofs",
  "body": " Indirect proofs  Text of section.  "
},
{
  "id": "sec-cases",
  "level": "1",
  "url": "sec-cases.html",
  "type": "Section",
  "number": "5.6",
  "title": "Proofs using cases and exhaustion",
  "body": " Proofs using cases and exhaustion  Text of section.  "
},
{
  "id": "sec-rule0",
  "level": "1",
  "url": "sec-rule0.html",
  "type": "Section",
  "number": "6.1",
  "title": "The zero-th rule of counting",
  "body": " The zero-th rule of counting  Text of section.  "
},
{
  "id": "sec-multiplication",
  "level": "1",
  "url": "sec-multiplication.html",
  "type": "Section",
  "number": "6.2",
  "title": "The multiplication rule",
  "body": " The multiplication rule  Text of section.  "
},
{
  "id": "sec-addition",
  "level": "1",
  "url": "sec-addition.html",
  "type": "Section",
  "number": "6.3",
  "title": "The addition rule",
  "body": " The addition rule  Text of section.  "
},
{
  "id": "sec-perms",
  "level": "1",
  "url": "sec-perms.html",
  "type": "Section",
  "number": "6.4",
  "title": "Permutations",
  "body": " Permutations  Text of section.  "
},
{
  "id": "sec-combs",
  "level": "1",
  "url": "sec-combs.html",
  "type": "Section",
  "number": "6.5",
  "title": "Combinations",
  "body": " Combinations  Text of section.  "
},
{
  "id": "sec-multisets",
  "level": "1",
  "url": "sec-multisets.html",
  "type": "Section",
  "number": "6.6",
  "title": "Multisets or perms and combs with repetition",
  "body": " Multisets or perms and combs with repetition  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
