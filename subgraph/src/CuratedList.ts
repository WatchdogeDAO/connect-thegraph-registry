import { ArchiverAdded, ArchiverRemoved } from "../generated/templates/CuratedList/CuratedList";
import { Member } from "../generated/schema";

export function handleArchiverAdded(event: ArchiverAdded): void {
  let member = Member.load(event.params.id);
  if (!member) {
    member = new Member(event.params.id);
  }
  member.twitterId = event.params.id;
  member.justification = event.params.reason;
  member.active = true;
  member.save();
}

export function handleArchiverRemoved(event: ArchiverRemoved): void {
  let member = Member.load(event.params.id);
  member.active = false;
  member.justification = event.params.reason;
  member.save();
}
