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

  public getIdentifier() : string {
    return this.identifier;
  }

  public getDownloads() : number {
    return this.downloads;
  }

  public getAverageRating() : number {
    return this.averageRating;
  }

  public getNumberReviews() : number {
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
