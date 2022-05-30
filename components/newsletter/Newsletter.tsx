import { siteTitle } from '../Layout';
import { ConvertKitForm } from './ConvertKitForm';

export const Newsletter = () => (
  <div id="newsletter">
    <h1>{siteTitle}</h1>
    <p>Receive an email when I publish.</p>
    <ConvertKitForm />
  </div>
);
