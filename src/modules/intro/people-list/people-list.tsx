import { useCallback, useState } from "react";

import { useAppContext } from "@/context";
import { countMax, countMin } from "@/shared/constants/app";

import { PeopleListAddMore } from "./add";
import { PeopleListDelete } from "./delete";
import { PeopleItemEdit } from "./edit";
import styles from "./people-list.module.css";
import { PeopleListView } from "./view";

export function PeopleList() {
  const [edited, setEdited] = useState<string | undefined>(undefined);

  const {
    state: { people, loaded },
  } = useAppContext();

  const canAdd = people.length < countMax;
  const canDelete = people.length > countMin;

  const onEditClose = useCallback(() => setEdited(undefined), []);

  if (!loaded) return null;

  return (
    <div className={["flex flex-1 flex-col", "w-full max-w-sm mt-4"].join(" ")}>
      <div className={styles.content}>
        <div className={styles.list}>
          <ul className={styles.list}>
            {people.map((name) => {
              const isEdited = name === edited;
              return (
                <li className="flex items-center justify-between gap-4" key={name}>
                  {isEdited ? (
                    <PeopleItemEdit onClose={onEditClose} value={name} />
                  ) : (
                    <>
                      <PeopleListView onEdit={setEdited} value={name} />
                      {canDelete && <PeopleListDelete value={name} />}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        {!edited && canAdd && <PeopleListAddMore />}
      </div>
    </div>
  );
}
