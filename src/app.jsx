const DEFAULT_FORM = 'https://forms.gle/NUYUvw7Sspwtbxp38';

const search = (CONTACT_DETAILS, postcode, handler) => {
  axios.get(`https://api.postcodes.io/postcodes/${postcode}`).then(response => {
    try {
      const ward = response.data.result.admin_ward
      handler([ward, CONTACT_DETAILS[ward]]);
    } catch (e) {
      console.log(e);
      alert(`we couldn't find your ward. is your postcode correct and in waltham forest?`);
    }
  }).catch(e => {
      console.log(e);
    alert(`we couldn't find your ward. is your postcode correct and in waltham forest?`);
  });
};

const useContactDetails = () => {
  const [CONTACT_DETAILS, SET_CONTACT_DETAILS] = React.useState(null);
  React.useEffect(() => {
    axios.get(`/assets/contact-info.json`).then(response => {
      SET_CONTACT_DETAILS(response.data);
    }).catch(e => {
      console.log(e);
      alert(`Couldn't load contact info, please refresh the page and try again`);
    });
  }, []);

  return CONTACT_DETAILS;
};

const Foo = () => {
  const [contactInfo, setContactInfo] = React.useState(null);
  const CONTACT_DETAILS = useContactDetails();
  if (!CONTACT_DETAILS) return null;

  return (
    <div className="row">
      {contactInfo
        ? (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h3 className="card-title">Your local group is <strong>{contactInfo[0]} Mutual Aid</strong>.</h3>
                <div>
                  <p></p>

                      <h4 className="mb-3">If you need help</h4>

                      <p>{contactInfo[1] && contactInfo[1].phone ? `Phone: ${contactInfo[1].phone}` : ''}</p>

                  <p className="email"> Email: {contactInfo[1] && contactInfo[1].email && (
                    Array.isArray(contactInfo[1].email)
                      ? contactInfo[1].email.map((e, i) => <a key={i} href={`mailto:${e}`}>{e}</a>)
                      : <a href={`mailto:${contactInfo[1].email}`}>{contactInfo[1].email}</a>
                  )}</p>

                      <p>{contactInfo[1] && contactInfo[1].facebook ? <span>Facebook: <a href={contactInfo[1].facebook} target="_blank">{contactInfo[1].facebook}</a></span> : ''}</p>

                      <p>{Object.keys(contactInfo[1]).length === 0 ? <span>We do not have this group's contact details - please email us at <a href="mailto:walthamforestmutualaid@gmail.com">walthamforestmutualaid@gmail.com</a> and we will try to put you in touch.</span> : ''}</p>

                      <h4 className="mb-3">If you want to help</h4>
                      <p>Fill in this form: <a href={contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM}>{contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM}</a></p>
                      <p>{contactInfo[1] && contactInfo[1].facebook ? <span>Join this Facebook group: <a href={contactInfo[1].facebook} target="_blank">{contactInfo[1].facebook}</a></span> : ''}</p>



                  <button type="submit" className="card-button btn btn-primary" onClick={() => setContactInfo(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">FIND YOUR LOCAL GROUP</h3>
                <p>Each ward of Waltham Forest has its own independent mutual aid group.</p>
                <p>Whether you <strong>need help</strong> or <strong>want to help</strong> - or both - enter your postcode to find the contact details of your local group.</p>
                <form onSubmit={e => {  e.preventDefault(); search(CONTACT_DETAILS, e.target.postcode.value, setContactInfo); } }>
                  <div className="form-group">
                    <input autoFocus className="form-control" type="text" id="postcode" name="postcode" placeholder="Your postcode" />
                    <p className="mt-2">Or see <a href="/groups">the full list</a>.</p>
                    <button type="submit" className="card-button btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      <div className="youtube col-md-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ILXwnza5XAs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};


const Bar = () => {
  const CONTACT_DETAILS = useContactDetails();
  if (!CONTACT_DETAILS) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Ward</th>
          <th>Phone number</th>
          <th>Email</th>
          <th>Signup form</th>
          <th>Facebook</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(CONTACT_DETAILS).map(k => (
          <tr>
            <td>{k}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].phone}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].email && (
              Array.isArray(CONTACT_DETAILS[k].email)
                ? CONTACT_DETAILS[k].email.map((e, i) => <a key={i} href={`mailto:${e}`}>{e}</a>)
                : <a href={`mailto:${CONTACT_DETAILS[k].email}`}>{CONTACT_DETAILS[k].email}</a>
            )}</td>
            <td><a href={CONTACT_DETAILS[k].form || DEFAULT_FORM}>{CONTACT_DETAILS[k].form || DEFAULT_FORM}</a></td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].facebook && <a href={`${CONTACT_DETAILS[k].facebook}`}>{CONTACT_DETAILS[k].facebook}</a>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const domContainer1 = document.querySelector('#groups-table');
domContainer1 && ReactDOM.render(<Bar />, domContainer1);

const domContainer2 = document.querySelector('#react-container');
domContainer2 && ReactDOM.render(<Foo />, domContainer2);
