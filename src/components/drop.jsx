import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from '@dnd-kit/core';

import {
  arrayMove,
  SortableContext,
  useSortable,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import { CSS } from '@dnd-kit/utilities';

// Individual Card Component
function Card({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    margin: '0.5rem 0',
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}

// Main Component
export default function DnDCardList() {
  const [cards, setCards] = useState(['Card 1', 'Card 2', 'Card 3']);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = cards.indexOf(active.id);
      const newIndex = cards.indexOf(over.id);
      setCards((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-4">🧲 Drag & Drop with @dnd-kit</h2>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={cards} strategy={rectSortingStrategy}>
          {cards.map((id) => (
            <Card key={id} id={id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
