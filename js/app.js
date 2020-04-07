var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CONTACT_DETAILS = {
  'Cann Hall': { 'form': 'https://forms.gle/oEgHW4ihCU1WCJ7h6', 'phone': null, 'email': 'cannhallmutualaid@gmail.com' },
  'Cathall': { 'form': 'https://forms.gle/PwpvE9Vx5MByutuH6', 'phone': '07926432520', 'email': 'cathall.mutual.aid@gmail.com' },
  'Chapel End': { 'form': 'https://forms.gle/rqjMNhRofNjruFuS6' },
  'Chingford Green': { 'form': 'https://forms.gle/t2SSYURZpeMomNrZA', 'phone': null, 'email': 'Chingfordgreenmutualaid@gmail.com' },
  'Endlebury': { 'form': 'https://forms.gle/tsULxCCm4s5RH6Aq6', 'phone': '020 31373908', 'email': 'chingfordcorona@gmail.com' },
  'Forest': { 'form': 'https://forms.gle/L3kuTdaXnMoaSRbh7', 'phone': '07515637649', 'email': 'forestwardmutualaid@gmail.com' },
  'Grove Green': { 'form': 'https://forms.gle/hprd7CxdhYojRrgq9', 'phone': '07933057684', 'email': 'Grovegreenmutualaid@gmail.com' },
  'Hale End and Highams Park': { 'form': 'https://forms.gle/EV456iu2xMAGE7gy7', 'phone': '07424807762', 'email': 'highamsparkcovid19@gmail.com' },
  'Hatch Lane': { 'form': 'https://forms.gle/GucfsCkkucYnGip7A' },
  'High Street': { 'form': 'https://forms.gle/qgJoFgHxcTEGfisQA', 'phone': '07516922035', 'email': 'e17highstmutualaid@gmail.com' },
  'Higham Hill': { 'form': 'https://forms.gle/Du6GuazmUsw5grkJA', 'phone': '07309409285', 'email': 'highamhillmutualaid@gmail.com' },
  'Hoe Street': { 'form': 'https://forms.gle/mkDdcDrMgC8Zpd1XA', 'phone': '07566767950', 'email': 'hoestreetmutualaid@gmail.com' },
  'Larkswood': { 'form': 'https://forms.gle/EQvWgyaqPctWKgSF6', 'phone': '07546155654', 'email': 'larkswoodcovid19@gmail.com' },
  'Lea Bridge': { 'form': 'https://forms.gle/KV3AUwxbETsbifAQ9', 'phone': '0208 539 0732 (12:30-3 tuesday-sat)', 'email': 'aid@loveleabridge.com' },
  'Leyton': { 'form': 'https://forms.gle/qnWwP7fhhrBLVgoS8', 'phone': '07497620579 or 07446258318', 'email': 'leytonmutualaid@gmail.com' },
  'Leytonstone': { 'form': 'https://forms.gle/xFBLwJSVXdPVkMhbA', 'phone': '07933521407', 'email': 'leytonstone.mutual.aid@gmail.com' },
  'Markhouse': { 'form': 'https://forms.gle/uatuTtynRRYxkiiu9', 'phone': 'Queen\'s Boundary Community Group: 07512237948', 'email': ['Friendsofstjamespark@gmail.com', 'QBCMarkhouse@gmail.com'] },
  'Valley': { 'form': 'https://forms.gle/wcJtUxN5gj3wYupKA' },
  'William Morris': { 'form': 'https://forms.gle/mLFpYQFsaSJVAQ9PA', 'phone': '07305960259', 'email': 'Williammorriscovid@gmail.com' },
  'Wood Street': { 'form': 'https://forms.gle/9nXHfVeyFPvENM9SA', 'facebook': 'https://www.facebook.com/groups/woodstmutualaid/' }
};

var DEFAULT_FORM = 'https://forms.gle/NUYUvw7Sspwtbxp38';

var search = function search(postcode, handler) {
  axios.get('https://api.postcodes.io/postcodes/' + postcode).then(function (response) {
    try {
      var ward = response.data.result.admin_ward;
      handler([ward, CONTACT_DETAILS[ward]]);
    } catch (e) {
      alert('we couldn\'t find your ward. is your postcode correct and in waltham forest?');
    }
  }).catch(function (e) {
    alert('we couldn\'t find your ward. is your postcode correct and in waltham forest?');
  });
};

var Foo = function Foo() {
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      contactInfo = _React$useState2[0],
      setContactInfo = _React$useState2[1];

  return React.createElement(
    'div',
    { className: 'row' },
    contactInfo ? React.createElement(
      'div',
      { className: 'col-md-12' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-body', style: { textAlign: 'center' } },
          React.createElement(
            'h3',
            { className: 'card-title' },
            'Your local group is ',
            React.createElement(
              'strong',
              null,
              contactInfo[0],
              ' Mutual Aid'
            ),
            '.'
          ),
          React.createElement(
            'div',
            null,
            React.createElement('p', null),
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'If you need help'
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].phone ? 'Phone: ' + contactInfo[1].phone : ''
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].email ? React.createElement(
                'span',
                null,
                'Email: ',
                React.createElement(
                  'a',
                  { href: 'mailto:' + contactInfo[1].email, target: '_blank' },
                  contactInfo[1].email
                )
              ) : ''
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].facebook ? React.createElement(
                'span',
                null,
                'Facebook: ',
                React.createElement(
                  'a',
                  { href: contactInfo[1].facebook, target: '_blank' },
                  contactInfo[1].facebook
                )
              ) : ''
            ),
            React.createElement(
              'p',
              null,
              Object.keys(contactInfo[1]).length === 0 ? React.createElement(
                'span',
                null,
                'We do not have this group\'s contact details - please email us at ',
                React.createElement(
                  'a',
                  { href: 'mailto:walthamforestmutualaid@gmail.com' },
                  'walthamforestmutualaid@gmail.com'
                ),
                ' and we will try to put you in touch.'
              ) : ''
            ),
            React.createElement(
              'h4',
              { className: 'mb-3' },
              'If you want to help'
            ),
            React.createElement(
              'p',
              null,
              'Fill in this form: ',
              React.createElement(
                'a',
                { href: contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM },
                contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM
              )
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].facebook ? React.createElement(
                'span',
                null,
                'Join this Facebook group: ',
                React.createElement(
                  'a',
                  { href: contactInfo[1].facebook, target: '_blank' },
                  contactInfo[1].facebook
                )
              ) : ''
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'card-button btn btn-primary', onClick: function onClick() {
                  return setContactInfo(null);
                } },
              'Close'
            )
          )
        )
      )
    ) : React.createElement(
      'div',
      { className: 'col-md-12' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-body' },
          React.createElement(
            'h3',
            { className: 'card-title' },
            'FIND YOUR LOCAL GROUP'
          ),
          React.createElement(
            'p',
            null,
            'Each ward of Waltham Forest has its own independent mutual aid group.'
          ),
          React.createElement(
            'p',
            null,
            'Whether you ',
            React.createElement(
              'strong',
              null,
              'need help'
            ),
            ' or ',
            React.createElement(
              'strong',
              null,
              'want to help'
            ),
            ' - or both - enter your postcode to find the contact details of your local group.'
          ),
          React.createElement(
            'form',
            { onSubmit: function onSubmit(e) {
                e.preventDefault();search(e.target.postcode.value, setContactInfo);
              } },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('input', { autoFocus: true, className: 'form-control', type: 'text', id: 'postcode', name: 'postcode', placeholder: 'Your postcode' }),
              React.createElement(
                'p',
                { className: 'mt-2' },
                'Or see ',
                React.createElement(
                  'a',
                  { href: '/groups' },
                  'the full list'
                ),
                '.'
              ),
              React.createElement(
                'button',
                { type: 'submit', className: 'card-button btn btn-primary' },
                'Search'
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col-md-6 mt-3' },
      React.createElement(
        'p',
        null,
        React.createElement(
          'strong',
          null,
          'Can I need help AND want to help?'
        )
      ),
      React.createElement(
        'p',
        null,
        'Yes!'
      ),
      React.createElement(
        'p',
        null,
        'Mutual aid is about us all helping ',
        React.createElement(
          'em',
          null,
          'each other'
        ),
        ', not about one group of people helping another, separate group of people.'
      ),
      React.createElement(
        'p',
        null,
        'This is one of the fundamental differences between mutual aid and charity.'
      )
    ),
    React.createElement(
      'div',
      { className: 'col-md-6 mt-3' },
      React.createElement('img', { src: '/img/paste.png', style: { width: '100%' } })
    )
  );
};

var Bar = function Bar() {
  return React.createElement(
    'table',
    { className: 'table table-bordered' },
    React.createElement(
      'thead',
      null,
      React.createElement(
        'tr',
        null,
        React.createElement(
          'th',
          null,
          'Ward'
        ),
        React.createElement(
          'th',
          null,
          'Phone number'
        ),
        React.createElement(
          'th',
          null,
          'Email'
        ),
        React.createElement(
          'th',
          null,
          'Signup form'
        ),
        React.createElement(
          'th',
          null,
          'Facebook'
        )
      )
    ),
    React.createElement(
      'tbody',
      null,
      Object.keys(CONTACT_DETAILS).map(function (k) {
        return React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            k
          ),
          React.createElement(
            'td',
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].phone
          ),
          React.createElement(
            'td',
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].email && (Array.isArray(CONTACT_DETAILS[k].email) ? CONTACT_DETAILS[k].email.map(function (e, i) {
              return React.createElement(
                'a',
                { key: i, href: 'mailto:' + e },
                e
              );
            }) : React.createElement(
              'a',
              { href: 'mailto:' + CONTACT_DETAILS[k].email },
              CONTACT_DETAILS[k].email
            ))
          ),
          React.createElement(
            'td',
            null,
            React.createElement(
              'a',
              { href: CONTACT_DETAILS[k].form || DEFAULT_FORM },
              CONTACT_DETAILS[k].form || DEFAULT_FORM
            )
          ),
          React.createElement(
            'td',
            null,
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].facebook && React.createElement(
              'a',
              { href: '' + CONTACT_DETAILS[k].facebook },
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