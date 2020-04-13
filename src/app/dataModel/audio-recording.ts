export class AudioRecording {

  public static readonly ARCHIVE_ORG_LOOKUP_URL = "https://archive.org/details/";

  private identifier: string;
  private downloads: number;
  private averageRating: number;
  private numberReviews: number;

  constructor() { }

  public getUrl() {
    return `${AudioRecording.ARCHIVE_ORG_LOOKUP_URL}${this.identifier}`;
  }

  public getIdentifier() {
    return this.identifier;
  }

  public getDownloads() {
    return this.downloads;
  }

  public getAverageRating() {
    return this.averageRating;
  }

  public getNumberReviews() {
    return this.numberReviews;
  }

  public setIdentifier(identifier: string) {
    this.identifier = identifier;
  }

  public setDownloads(downloads: number) {
    this.downloads = downloads;
  }

  public setAverageRating(averageRating: number) {
    this.averageRating = averageRating;
  }

  public setNumberReviews(numberReviews: number) {
    this.numberReviews = numberReviews;
  }

}
