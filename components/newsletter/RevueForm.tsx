export const RevueForm = () => (
  <div id="revue-embed">
    <form
      id="revue-form"
      name="revue-form"
      method="post"
      target="_blank"
      action="https://www.getrevue.co/profile/gdbroman/add_subscriber"
    >
      <div className="revue-form-group">
        <input
          type="email"
          name="member[email]"
          id="member_email"
          className="revue-form-field"
          placeholder="Your email address..."
        />
        <div className="revue-form-actions">
          <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" />
        </div>
      </div>
    </form>
  </div>
);
