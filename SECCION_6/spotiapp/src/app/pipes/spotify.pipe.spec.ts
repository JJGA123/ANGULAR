import { SpotifyPipe } from './spotify.pipe';

describe('SpotifyPipe', () => {
  it('create an instance', () => {
    const pipe = new SpotifyPipe();
    expect(pipe).toBeTruthy();
  });
});
