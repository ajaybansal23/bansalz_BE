const Ceremony = require('../db/models/ceremonies.model');

const ceremonies = (req, res) => {
    console.log("Sending Ceremonies data to UI");

    // const data = {
    //     title: "Wedding",
    //     description: "Union of two hearts",
    //     imageUrl: "",
    //     subCeremonies: [
    //         {
    //             title: "Vyah Hath",
    //             imageUrl: "",
    //             customs: [
    //                 {
    //                     title: "Vyah Hath 1",
    //                     participants: "Groom, Groom's Mother, Married Women (5 or 7)",
    //                     thingsNeeded: "Mauli aka Kautuka, Black pulse (ਕਾਲੇ ਮਾਹ) 1.25kg, Jaggery (ਗੂੜ੍ਹ) 3kg, Traditional Grind mill (ਚੱਕੀ)",
    //                     description: "Viyah Haath marks the official start of wedding rituals in our clan. It is usually performed 7 days before the wedding day but can be performed 9 or 11 days before. Preferably 7 married women (if not available then can be 5 married women) participate in this ritual including bride/groom’s mother. The mother ties the mauli on left wrist of each participating women and give a little piece of Jaggery to each one of them which they put into their mouths. Then all the participating women together grind the black pulse in the grind mill for 7 times only. If the black pulse is not grinded properly after 7 times, one of the participating women can finish the grinding of pulse as it will be needed for a ritual later. After the above process is completed, the mother of the bride/groom to give pieces of Jaggery to all women who participated in the ritual."
    //                 },
    //                 {
    //                     title: "Send Wedding Invitations",
    //                     participants: "",
    //                     thingsNeeded: "Sweets, Fruits & ofcourse Wedding Invitation",
    //                     description: "After viyah haath is completed, the process of sending wedding invitation starts. Customary the first wedding invitation is to the mother’s family (ਨਾਨਕੇ). So the parents of the bride/groom go to the house of grandparents/uncle/aunt (mother’s side) and give them the wedding invitation along with sweets and fruits. This is to officially invite them to the wedding. Then all the other wedding invitations can be given to relatives and friends by personally visiting their homes or by phone/email/whattsapp or any other mean as considered appropriate."
    //                 }
    //             ]
    //         },
    //         {
    //             title: "Bnek",
    //             imageUrl: "",
    //             customs: [
    //                 {
    //                     title: "Bnek 1",
    //                     participants: "Groom, Groom's Mother, Married Women (5 or 7)",
    //                     thingsNeeded: "",
    //                     description: "This ritual is performed 4 days before the wedding day and preferably in the morning by 10:00 or 11:00 am as there are other ritual that follows this on the same day. Firstly, the black pluse used at Viyah Haath needed to be dipped overnight before this ritual. Mother of bride/groom tie the mauli on left wrist of 7 (or 5) married women, similarly, as done at viyah haath. All the participating women then crush and grind the soggy black pulse (dipped overnight) in mortar and pestle (ਕੁੰਡੀ ਸੋਟਾ). Once it is ready, all the participating women take a portion of it and then, with their hands, make small chunks (ਬੜੀ ਟੁਕਣਾ ) until the mixer is all used up.  These chunks are then left to dry in the sun. The Bnek is now completed."
    //                 }
    //             ]
    //         }
    //     ]
    // }

    // let ceremonyData = new Ceremony(data);
    // ceremonyData.save(data => {
    //     console.log(data);
    // })

    Ceremony.find({}, (err, ceremonies) => {
        if (err) {
            res.status(500).send({ error: "Could not load ceremonies" })
        }
        setTimeout(() => {
            res.send(ceremonies);
        }, 1000)
    })


};

module.exports = {
    ceremonies
}