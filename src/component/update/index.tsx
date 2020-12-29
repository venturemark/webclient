// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import React, { useEffect } from "react";
import {
  PlasmicUpdate,
  DefaultUpdateProps,
} from "component/plasmic/shared/PlasmicUpdate";
import { Node } from "slate";
import * as linechart from "component/linechart";
import { IUpdate } from "module/interface/update";
import { IMetric } from "module/interface/metric";

interface UpdateProps extends DefaultUpdateProps {
  text: Node[];
  dataKey: string;
  data: IMetric[];
  name: string;
  isFlipped: boolean;
  id: string;
  updates: IUpdate[];
  setUpdates: React.Dispatch<React.SetStateAction<IUpdate[]>>;
  isContext: boolean;
}

function Update(props: UpdateProps) {
  const {
    text,
    dataKey,
    data,
    name,
    isFlipped,
    id,
    updates,
    setUpdates,
    isContext,
  } = props;

  useEffect(() => {
    if (isContext === true) {
      setTimeout(() => {
        const flippedUpdates = updates.map((update) => {
          const isFlipped = id === update.id ? !update.isFlipped : false;
          const isContext = id === update.id ? !update.isContext : false;
          return { ...update, isFlipped, isContext };
        });
        setUpdates(flippedUpdates);
      }, 500);
      setTimeout(() => {
        const flippedUpdates = updates.map((update) => {
          const isFlipped = id === update.id ? true : false;
          const isContext = false;
          return { ...update, isFlipped, isContext };
        });
        setUpdates(flippedUpdates);
      }, 1000);
    }
  }, [isContext, id, setUpdates, updates]);

  const changeContext = (updateId: string) => {
    if (updateId === id) {
      return;
    }

    const flippedUpdates = updates.map((update) => {
      const isFlipped = update.id === updateId ? !update.isFlipped : false;
      const isContext = update.id === updateId ? !update.isFlipped : false;
      return { ...update, isFlipped, isContext };
    });
    setUpdates(flippedUpdates);
    console.log("Calling set updates:", flippedUpdates);
  };

  return (
    <PlasmicUpdate
      toggleUpdateView={{
        "aria-label": "Toggle View",
        onPress: () => {
          const flippedUpdates = updates.map((update: any) => {
            const isFlipped = id === update.id ? !update.isFlipped : false;
            return { ...update, isFlipped };
          });
          setUpdates(flippedUpdates);
        },
      }}
      updateContent={{
        isFlipped: isFlipped,
        text: text,
        name: name,
        dataKey: dataKey,
        data: data,
        changeContext: changeContext,
      }}
    />
  );
}

export default Update;
