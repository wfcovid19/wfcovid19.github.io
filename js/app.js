var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var CONTACT_DETAILS = {
  'Cann Hall': { 'phone': null, 'email': 'cannhallmutualaid@gmail.com' },
  'Cathall': { 'phone': '07926432520', 'email': 'cathall.mutual.aid@gmail.com' },
  'Chapel End': null,
  'Chingford Green': { 'phone': null, 'email': 'Chingfordgreenmutualaid@gmail.com' },
  'Endlebury': { 'phone': '020 31373908', 'email': 'chingfordcorona@gmail.com' },
  'Forest': { 'phone': '07515637649', 'email': 'forestwardmutualaid@gmail.com' },
  'Grove Green': { 'phone': '07933057684', 'email': 'Grovegreenmutualaid@gmail.com' },
  'Hale End and Highams Park': { 'phone': '07424807762', 'email': 'highamsparkcovid19@gmail.com' },
  'Hatch Lane': null,
  'High Street': { 'phone': '07516922035', 'email': 'e17highstmutualaid@gmail.com' },
  'Higham Hill': { 'phone': '07309409285', 'email': 'highamhillmutualaid@gmail.com' },
  'Hoe Street': { 'phone': '07566767950', 'email': 'hoestreetmutualaid@gmail.com' },
  'Larkswood': { 'phone': '07546155654', 'email': 'larkswoodcovid19@gmail.com' },
  'Lea Bridge': null,
  'Leyton': { 'phone': '07497620579 or 07446258318', 'email': 'leytonmutualaid@gmail.com' },
  'Leytonstone': { 'phone': '07933521407', 'email': 'leytonstone.mutual.aid@gmail.com' },
  'Markhouse': { 'phone': null, 'email': 'Friendsofstjamespark@gmail.com' },
  'Valley': null,
  'William Morris': { 'phone': '07305960259', 'email': 'Williammorriscovid@gmail.com' },
  'Wood Street': { 'facebook': 'https://www.facebook.com/groups/woodstmutualaid/' }
};

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
    { className: 'row mb-3' },
    React.createElement(
      'div',
      { className: 'col-md-6' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-body', style: { minHeight: '320px' } },
          React.createElement(
            'h3',
            { className: 'card-title' },
            'IF YOU NEED HELP'
          ),
          React.createElement(
            'p',
            null,
            'Each ward of Waltham Forest has its own independent mutual aid group.'
          ),
          contactInfo ? React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              null,
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
              'p',
              null,
              contactInfo[1] && contactInfo[1].phone ? 'Phone: ' + contactInfo[1].phone : ''
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].email ? 'Email: ' + contactInfo[1].email : ''
            ),
            React.createElement(
              'p',
              null,
              contactInfo[1] && contactInfo[1].facebook ? 'Facebook: ' + contactInfo[1].facebook : ''
            ),
            React.createElement(
              'p',
              null,
              !contactInfo[1] ? 'We do not have this group\'s contact details - please email us at walthamforestmutualaid@gmail.com and we will try to put you in touch.' : ''
            ),
            React.createElement(
              'button',
              { type: 'submit', className: 'card-button btn btn-primary', onClick: function onClick() {
                  return setContactInfo(null);
                } },
              'Close'
            )
          ) : React.createElement(
            'form',
            { onSubmit: function onSubmit(e) {
                e.preventDefault();search(e.target.postcode.value, setContactInfo);
              } },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'postcode' },
                'Enter your postcode to find the contact details of your local group.'
              ),
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
      { className: 'col-md-6' },
      React.createElement(
        'div',
        { className: 'card' },
        React.createElement(
          'div',
          { className: 'card-body', style: { minHeight: '320px' } },
          React.createElement(
            'h3',
            { className: 'card-title' },
            'IF YOU WANT TO HELP'
          ),
          React.createElement(
            'p',
            null,
            'Each ward of Waltham Forest has its own independent mutual aid group.'
          ),
          React.createElement(
            'p',
            null,
            'Fill in ',
            React.createElement(
              'a',
              { href: 'https://forms.gle/NUYUvw7Sspwtbxp38' },
              'this form'
            ),
            ' and someone from your local group will get back to you.'
          ),
          React.createElement(
            'a',
            { href: 'https://forms.gle/NUYUvw7Sspwtbxp38', target: '_blank', className: 'card-button btn btn-primary' },
            'Fill in form'
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
          'Why can\'t I need help AND want to help?'
        )
      ),
      React.createElement(
        'p',
        null,
        'You can!'
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
      ),
      React.createElement(
        'p',
        null,
        'We keep requests for help separate from people making offers of help only to help us protect the information of our more vulnerable friends and neighbours.'
      ),
      React.createElement(
        'p',
        null,
        'Please use both options above if you need help but also want to help others.'
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
            CONTACT_DETAILS[k] && CONTACT_DETAILS[k].email && React.createElement(
              'a',
              { href: 'mailto:' + CONTACT_DETAILS[k].email },
              CONTACT_DETAILS[k].email
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