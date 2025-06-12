// Test file to verify isolated components work
import { IsolatedNeonButton, IsolatedHeroTitle } from './isolated/hero';

console.log('Components loaded successfully:', {
  IsolatedNeonButton,
  IsolatedHeroTitle
});

export default function TestIsolatedComponents() {
  return (
    <div>
      <h2>Testing Isolated Components</h2>
      <IsolatedNeonButton variant="primary">
        Test Button
      </IsolatedNeonButton>
      <IsolatedHeroTitle
        primaryText="Test Title"
        subtitleText="Test Subtitle"
      />
    </div>
  );
}
