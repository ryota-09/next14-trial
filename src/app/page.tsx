import { deleteAction } from "@/lib/actions";
import { AppLink } from "@/ui/AppLink";

export default function Home() {
  return (
    <main>
      <form action={deleteAction}>
        <input type="hidden" name="id" value="Actions Value" />
        <button className="rounded-md border p-2">
          <span>Deleteボタン</span>
        </button>
      </form>
      <AppLink />
    </main>
  );
}
