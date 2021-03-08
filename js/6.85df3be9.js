(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [6], {
        "414a": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return a
            }));
            var a = {
                methods: {
                    vibrate: function() {
                        var e, t;
                        (null === (e = window) || void 0 === e || null === (t = e.navigator) || void 0 === t ? void 0 : t.vibrate) && navigator.vibrate(75)
                    }
                }
            }
        },
        "6b61": function(e, t, i) {
            "use strict";
            var a = i("b62e"),
                n = i.n(a);
            n.a
        },
        a1d1: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("q-page", {
                        staticClass: "flex content-center justify-center abt-page q-py-md q-px-xl"
                    }, [i("div", {
                        staticClass: "content text-center",
                        class: e.$q.dark.isActive ? "bg-primary" : ""
                    }, [i("h4", {
                        staticClass: "full-width text-accent text-bold q-mt-sm q-mb-lg"
                    }, [e._v("About Piyush")]), e._v("\n    Piyush Bhatia is a "), i("i", [e._v("fun loving, jovial, techinically sound, highly ambitious and very friendly")]), e._v(" person.\n    He is fond of working with cutting-edge technologies and loves to learn new things (ergo a Software Engineer as he describes himself).\n    "), e.is_personal ? i("span", [e._v("He loves "), i("i", [e._v("food (cooking included), travel, adventure, painting, sketching, poetry, reading and serving people.")])]) : e._e(), e._v("\n    He is usually attributed the "), i("i", [e._v("textbook definition of a geek/techie")]), e._v(". He is a "), i("i", [e._v("voracious reader")]), e._v(" and reads everything that comes across his desk.\n    He has a "), i("i", [e._v("penchant for delving deep into understanding how anything and everything works.")]), e._v(" In his free time, you would find him either learning something\n    avant-garde or tinkering with Tableau, coming up with new projects, painting, "), e.is_personal ? i("span", [e._v("sketching, writing poetry, driving around town or cooking some delicious food/baking cakes/desserts etc")]) : i("span", [e._v("or sketching")]), e._v(";\n    apart from his full-time job of being a geek and an "), i("i", [e._v("ordained sys-admin for his family and friends")]), e._v(" that is.\n    "), e.is_personal ? i("span", [e._v("He also loves "), i("i", [e._v("Playing Cricket.")]), e._v(" He loves to "), i("i", [e._v("make people happy and being the reason for their smile (as described by his friends).")])]) : e._e(), e.is_personal ? i("span", [i("br"), e._v("\n    His favorite quotes are :\n    "), i("br"), e._v("\n    ◉ "), i("i", {
                        staticClass: "text-left",
                        class: e.$q.dark.isActive ? "text-white" : "text-primary"
                    }, [e._v("There's always a room at the TOP. That's where I build my SPOT!")]), i("br"), e._v("\n    ◉ "), i("i", {
                        staticClass: "text-left",
                        class: e.$q.dark.isActive ? "text-white" : "text-primary"
                    }, [e._v("You are always one decision away from a completely different life.")]), i("br"), e._v("\n    ◉ "), i("i", {
                        staticClass: "text-left",
                        class: e.$q.dark.isActive ? "text-white" : "text-primary"
                    }, [e._v("You must learn from the mistakes of others. You will never live long enough to make them all yourself.")])]) : i("span", [i("br"), i("br"), i("div", {
                        staticClass: "text-left"
                    }, [e._v("Summary of his technical acumen & experience (in his own words)")]), i("br"), i("ul", {
                        staticClass: "text-left tech-list",
                        class: e.$q.dark.isActive ? "text-white" : "text-primary"
                    }, [i("li", [e._v("Highly trained with expertise and deep knowledge in all things javascript , node , backend , backend Architecture and web development <foraying into micro backend architectures, IOTs and chatbots (Dialogflow)>")]), i("li", [e._v("Well versed in Backend architecture, design and Software development with primary focus and expertise in JavaScript (node) based stack and secondary focus in Java and Python based stack")]), i("li", [e._v("Architected and Solutioned multiple highly available, resilient, fault tolerant products and applications with architectural components")]), i("li", [e._v("Experience in setting up high velocity runway for applications with continuous delivery model & SOPs using project management models. ")]), i("li", [e._v("Working with startups gave me the opportunity to wear multiple hats and take up/gain experience in Software Engineering and Software Architect roles as well, personally I prefer the backend architecture and development work as I can visibly see my work on screen and I have polished my skills to get pixel perfect UI and UX for users")]), i("li", [e._v("Expert problem solving, communication & presentation skills")]), i("li", [e._v("Fully self sufficient and capable of shipping an application from scratch as an Individual Contributor (IC), my career path has helped me achieve this dual proficiency")]), i("li", [e._v("Proven legacy in Software Projects, with excellent feedback from the people I have worked with, A strong proponent of serving my best")]), i("li", [e._v("My Career trajectory is focused on becoming a Software Developer Engineer(SDE) <basically looking for the ability design softwares for the company I work for> ")])])])]), i("div", {
                        staticClass: "q-my-md full-width flex justify-center"
                    }, [i("div", {
                        staticClass: "text-warning",
                        staticStyle: {
                            "padding-top": "14.5px"
                        }
                    }, [e._v("Professional")]), i("q-toggle", {
                        staticClass: "text-warning",
                        attrs: {
                            dark: e.$q.dark.isActive,
                            color: "secondary",
                            size: "lg",
                            label: "Personal"
                        },
                        on: {
                            input: e.vibrate
                        },
                        model: {
                            value: e.is_personal,
                            callback: function(t) {
                                e.is_personal = t
                            },
                            expression: "is_personal"
                        }
                    })], 1)])
                },
                n = [],
                s = i("414a"),
                o = {
                    name: "About",
                    data: function() {
                        return {
                            is_personal: !1
                        }
                    },
                    mixins: [s["a"]]
                },
                r = o,
                l = (i("6b61"), i("2877")),
                c = i("eebe"),
                d = i.n(c),
                p = i("9989"),
                h = i("9564"),
                v = Object(l["a"])(r, a, n, !1, null, "07f55364", null);
            t["default"] = v.exports;
            d()(v, "components", {
                QPage: p["a"],
                QToggle: h["a"]
            })
        },
        b62e: function(e, t, i) {}
    }
]);