var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DEFAULT_FORM = 'https://forms.gle/NUYUvw7Sspwtbxp38';

var search = function search(CONTACT_DETAILS, postcode, handler) {
  axios.get("https://api.postcodes.io/postcodes/" + postcode).then(function (response) {
    try {
      var ward = response.data.result.admin_ward;
      handler([ward, CONTACT_DETAILS[ward]]);
    } catch (e) {
      console.log(e);
      alert("we couldn't find your ward. is your postcode correct and in waltham forest?");
    }
  }).catch(function (e) {
    console.log(e);
    alert("we couldn't find your ward. is your postcode correct and in waltham forest?");
  });
};

var useContactDetails = function useContactDetails() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      CONTACT_DETAILS = _React$useState2[0],
      SET_CONTACT_DETAILS = _React$useState2[1];

  React.useEffect(function () {
    axios.get("/assets/contact-info.json").then(function (response) {
      SET_CONTACT_DETAILS(response.data);
    }).catch(function (e) {
      console.log(e);
      alert("Couldn't load contact info, please refresh the page and try again");
    });
  }, []);

  return CONTACT_DETAILS;
};

var Foo = function Foo() {
  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      contactInfo = _React$useState4[0],
      setContactInfo = _React$useState4[1];

  var CONTACT_DETAILS = useContactDetails();
  if (!CONTACT_DETAILS) return null;

  return React.createElement(
    "div",
    { className: "row" },
    contactInfo ? React.createElement(
      "div",
      { className: "col-md-6" },
      React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "div",
          { className: "card-body", style: { textAlign: 'center' } },
          React.createElement(
            "h3",
            { className: "card-title" },
            "Your local group is ",
            React.createElement(
              "strong",
              null,
              contactInfo[0],
              " Mutual Aid"
            ),
            "."
          ),
          React.createElement(
            "div",
            null,
            React.createElement("p", null),
            React.createElement(
              "h4",
              { className: "mb-3" },
              "If you need help"
            ),
            React.createElement(
              "p",
              null,
              contactInfo[1] && contactInfo[1].phone ? "Phone: " + contactInfo[1].phone : ''
            ),
            React.createElement(
              "p",
              { className: "email" },
              " Email: ",
              contactInfo[1] && contactInfo[1].email && (Array.isArray(contactInfo[1].email) ? contactInfo[1].email.map(function (e, i) {
                return React.createElement(
                  "a",
                  { key: i, href: "mailto:" + e },
                  e
                );
              }) : React.createElement(
                "a",
                { href: "mailto:" + contactInfo[1].email },
                contactInfo[1].email
              ))
            ),
            React.createElement(
              "p",
              null,
              contactInfo[1] && contactInfo[1].facebook ? React.createElement(
                "span",
                null,
                "Facebook: ",
                React.createElement(
                  "a",
                  { href: contactInfo[1].facebook, target: "_blank" },
                  contactInfo[1].facebook
                )
              ) : ''
            ),
            React.createElement(
              "p",
              null,
              Object.keys(contactInfo[1]).length === 0 ? React.createElement(
                "span",
                null,
                "We do not have this group's contact details - please email us at ",
                React.createElement(
                  "a",
                  { href: "mailto:walthamforestmutualaid@gmail.com" },
                  "walthamforestmutualaid@gmail.com"
                ),
                " and we will try to put you in touch."
              ) : ''
            ),
            React.createElement(
              "h4",
              { className: "mb-3" },
              "If you want to help"
            ),
            React.createElement(
              "p",
              null,
              "Fill in this form: ",
              React.createElement(
                "a",
                { href: contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM },
                contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM
              )
            ),
            React.createElement(
              "p",
              null,
              contactInfo[1] && contactInfo[1].facebook ? React.createElement(
                "span",
                null,
                "Join this Facebook group: ",
                React.createElement(
                  "a",
                  { href: contactInfo[1].facebook, target: "_blank" },
                  contactInfo[1].facebook
                )
              ) : ''
            ),
            React.createElement(
              "button",
              { type: "submit", className: "card-button btn btn-primary", onClick: function onClick() {
                  return setContactInfo(null);
                } },
              "Close"
            )
          )
        )
      )
    ) : React.createElement(
      "div",
      { className: "col-md-6" },
      React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "div",
          { className: "card-body" },
          React.createElement(
            "h3",
            { className: "card-title" },
            "FIND YOUR LOCAL GROUP"
          ),
          React.createElement(
            "p",
            null,
            "Each ward of Waltham Forest has its own independent mutual aid group."
          ),
          React.createElement(
            "p",
            null,
            "Whether you ",
            React.createElement(
              "strong",
              null,
              "need help"
            ),
            " or ",
            React.createElement(
              "strong",
              null,
              "want to help"
            ),
            " - or both - enter your postcode to find the contact details of your local group."
          ),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(e) {
                e.preventDefault();search(CONTACT_DETAILS, e.target.postcode.value, setContactInfo);
              } },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("input", { autoFocus: true, className: "form-control", type: "text", id: "postcode", name: "postcode", placeholder: "Your postcode" }),
              React.createElement(
                "p",
                { className: "mt-2" },
                "Or see ",
                React.createElement(
                  "a",
                  { href: "/groups" },
                  "the full list"
                ),
                "."
              ),
              React.createElement(
                "button",
                { type: "submit", className: "card-button btn btn-primary" },
                "Search"
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "youtube col-md-6" },
      React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/ILXwnza5XAs", frameborder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen: true })
    )
  );
};

var Bar = function Bar() {
  var CONTACT_DETAILS = useContactDetails();
  if (!CONTACT_DETAILS) return null;

  return React.createElement(
    "table",
    { className: "table table-bordered" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Ward"
        ),
        React.createElement(
          "th",
          null,
          "Phone number"
        ),
        React.createElement(
          "th",
          null,
          "Email"
        ),
        React.createElement(
          "th",
          null,
          "Signup form"
        ),
        React.createElement(
          "th",
          null,
          "Facebook"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      Object.keys(CONTACT_DETAILS).map(function (k) {
        return React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            k
          ),
          React.createElement(
            "td",
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].phone
          ),
          React.createElement(
            "td",
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].email && (Array.isArray(CONTACT_DETAILS[k].email) ? CONTACT_DETAILS[k].email.map(function (e, i) {
              return React.createElement(
                "a",
                { key: i, href: "mailto:" + e },
                e
              );
            }) : React.createElement(
              "a",
              { href: "mailto:" + CONTACT_DETAILS[k].email },
              CONTACT_DETAILS[k].email
            ))
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "a",
              { href: CONTACT_DETAILS[k].form || DEFAULT_FORM },
              CONTACT_DETAILS[k].form || DEFAULT_FORM
            )
          ),
          React.createElement(
            "td",
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].facebook && React.createElement(
              "a",
              { href: "" + CONTACT_DETAILS[k].facebook },
              CONTACT_DETAILS[k].facebook
            )
          )
        );
      })
    )
  );
};

var domContainer1 = document.querySelector('#groups-table');
domContainer1 && ReactDOM.render(React.createElement(Bar, null), domContainer1);

var domContainer2 = document.querySelector('#react-container');
domContainer2 && ReactDOM.render(React.createElement(Foo, null), domContainer2);