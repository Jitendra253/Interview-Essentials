# Automation Module — React Interview Guide


I worked on the Automation module, where users can create rules based on a trigger, conditions, and actions. The important part of this module was that the UI was dynamic. The available conditions and actions depended on what the user selected, so changing one selection could change the entire configuration on the other side.

For example, when the user selects a particular artifact or event, the frontend loads the corresponding automation templates. Based on that selection, we display the appropriate conditions and actions.

## 1. Component Structure

```text
AutomationPage
│
├── AutomationList
│
├── AutomationModal
│
│   ├── TriggerSection
│   │
│   ├── ConditionBuilder
│   │   └── ConditionRow
│   │
│   └── ActionBuilder
│       └── ActionRow
│
└── Save / Update

```


## 2. Component Flow

```text
AutomationPage
      ↓
Controls overall create/edit mode

TriggerSection
      ↓
Handles selected trigger/artifact

ConditionBuilder
      ↓
Displays dynamic conditions

ActionBuilder
      ↓
Displays dynamic actions

ConditionRow / ActionRow
      ↓
Handles individual selections
```


## 3. Explain the state


This is one of the most important parts.

In React, I would maintain the automation configuration as state rather than directly manipulating DOM elements.

```tsx
For example:

const [selectedTrigger, setSelectedTrigger] = useState(null);

const [conditions, setConditions] = useState([]);

const [actions, setActions] = useState([]);

const [templates, setTemplates] = useState([]);

const [isEditMode, setIsEditMode] = useState(false);

const [loading, setLoading] = useState(false);
```


### You can explain:


The trigger is the parent-level state because the conditions and actions depend on it. Conditions and actions are maintained as arrays because users can add multiple rules.

## 4. Initial Create Flow


```text
When the user clicks Create Automation:

Open Automation Modal
        ↓
Set Create Mode
        ↓
Load initial trigger/artifact information
        ↓
Fetch available templates
        ↓
Store templates in React state
        ↓
Render condition/action options
```


In the original file, the modal opening flow calls the trigger/template loading logic for a new automation.


## 5. The Most Important Part — Trigger Change


This is the challenge you should emphasize in the interview.

Suppose the user selects:

Task Updated

The frontend loads the corresponding templates.

Then the user changes it to:

Sprint Completed

The previous conditions/actions may no longer be valid.

So the flow is:

```text
Trigger changes
       ↓
Clear old dependent state
       ↓
Fetch new templates/metadata
       ↓
Store new metadata
       ↓
Render new conditions
       ↓
Render new actions
```


In your actual file, the change handler explicitly removes the previously generated condition/action UI before loading the new templates.

### React equivalent

```tsx
const handleTriggerChange = async (trigger) => {
  setSelectedTrigger(trigger);

  // Remove old dependent configuration
  setConditions([]);
  setActions([]);

  setLoading(true);

  const response = await getAutomationTemplates(trigger);

  setTemplates(response.data);

  setLoading(false);
```

};

### Interview explanation


The trigger was the parent dependency. Whenever it changed, I cleared the old conditions and actions because they might no longer be valid. Then I loaded the templates for the new selection and rendered the new configuration.

This is one of the strongest parts of your answer.


## 6. Dynamic Rendering


Don't say:

We created every condition manually.

Instead say:

The UI was configuration-driven. We received the available templates/configuration from the API and rendered the appropriate controls based on that configuration.

For example:

```tsx
templates.map(template => (
  <ConditionRow
    key={template.id}
    template={template}
  />
))

```

And:

```tsx
<ActionBuilder
  actions={actions}
  templates={templates}
/>
```


The important concept is:

```text
API Configuration
       ↓
React State
       ↓
Dynamic Components
       ↓
User Configuration
```


## 7. Adding Multiple Conditions


Your UI supports adding conditions.

So don't maintain just:

const [condition, setCondition] = useState({});

Instead:

```tsx
const [conditions, setConditions] = useState([]);

For example:

[
  {
    field: "status",
    operator: "equals",
    value: "Done"
  },
  {
    field: "priority",
    operator: "equals",
    value: "High"
  }
]
```


Then:

```tsx
{conditions.map((condition, index) => (
  <ConditionRow
    key={condition.id}
    condition={condition}
    index={index}
    onChange={handleConditionChange}
    onRemove={removeCondition}
  />
```

))}

This is where React's component model makes the implementation cleaner.

## 8. Condition Component


### Component structure


```text
ConditionRow
│
├── Field dropdown
├── Operator dropdown
├── Value input
└── Delete button
```


### Example


```tsx
function ConditionRow({
  condition,
  onChange,
  onRemove
}) {
  return (
    <>
      <FieldSelector />
      <OperatorSelector />
      <ValueSelector />
      <button onClick={onRemove}>
        Delete
      </button>
    </>
  );
```

}

### State flow


The child only communicates changes back:

```text
ConditionBuilder
      ↓
ConditionRow
      ↓
onChange()
      ↓
Parent updates state
```


## 9. Action Component


### Component flow


```text
ActionBuilder
      ↓
ActionRow
      ↓
Action Type
      ↓
Action-specific configuration
```


For example:

Action:
Send Notification

Then show:

Recipients
Message

If the user changes the action:

Assign User

the right-side configuration changes.

So again:

```text
Action Type
     ↓
Action Metadata
     ↓
Dynamic Action UI
```

## 10. Save Flow


When the user clicks Save, React already has the complete configuration in state.

For example:

```json
{
  trigger: selectedTrigger,

  conditions: conditions,

  actions: actions
```

}

### API payload


```tsx
const payload = {
  trigger: selectedTrigger,
  conditions,
  actions
};

```

await createAutomation(payload);

### Interview wording


I kept the UI state separate from the API layer. When the user clicked Save, I converted the current React state into the API payload and passed it to the service layer.

That is a good frontend architecture answer.

## 11. Edit Flow — Very Important


This is where your automation becomes more interesting.

Your actual file has a separate edit flow. It gets the selected automation rule and calls an API to retrieve the existing rule configuration.

In React:

```text
User clicks Edit
       ↓
setIsEditMode(true)
       ↓
Open modal
       ↓
Fetch automation rule
       ↓
Receive saved configuration
       ↓
Set trigger
       ↓
Load corresponding metadata
       ↓
Restore conditions
       ↓
Restore actions
       ↓
Render complete existing rule
```

## 12. Why Edit Is Difficult


This is a very good interview point.

Suppose backend returns:

```json
{
  trigger: "task_updated",

  conditions: [
    {
      field: "priority",
      operator: "equals",
      value: "High"
    }
  ],

  actions: [
    {
      type: "notification"
    }
  ]
}
```


You cannot simply do:

setConditions(data.conditions);

and assume everything will work.

Why?

Because the UI first needs the metadata/template corresponding to:

task_updated

So the correct sequence is:

```text
Fetch existing automation
        ↓
Set trigger
        ↓
Fetch trigger-specific metadata
        ↓
Render available controls
        ↓
Restore saved conditions
        ↓
Restore saved actions
```


This is the state synchronization problem.

## 13. React useEffect Role


This is where you can demonstrate your React knowledge.

For example:

```tsx
useEffect(() => {
  if (selectedTrigger) {
    loadTemplates(selectedTrigger);
  }
}, [selectedTrigger]);
```


Then another effect can restore the edit data after metadata becomes available:

```tsx
useEffect(() => {
  if (
    isEditMode &&
    templates.length &&
    editData
  ) {
    setConditions(editData.conditions);
    setActions(editData.actions);
  }
}, [templates, editData, isEditMode]);
```


Interview explanation:

I used effects based on dependencies rather than trying to perform all updates in one place. Trigger changes load the relevant metadata, and once that metadata is available, the saved edit configuration can be restored.

## 14. Component Communication


If they ask:

"How did components communicate?"

Answer:

I kept the automation configuration state at the parent level because multiple child components depended on it. The parent passed the current configuration and callback functions to child components. When a child changed a condition or action, it called the callback, and the parent updated the state.

Diagram:

```text
              AutomationPage
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
     Trigger    Conditions    Actions
        │           │           │
        │           ↓           ↓
        │       Condition    Action
        │          Row          Row
        │           │           │
        └──── callbacks ────────┘
                    ↓
              Parent State
```

## 15. Why Not Put Everything in One Component?


If interviewer asks this, say:

Because the automation UI contains different responsibilities. I would separate trigger, condition, and action builders into reusable components. This keeps the parent component responsible for overall state and orchestration, while individual components handle their own UI and user interactions.

That's a strong React answer.

## 16. What About Redux?


Don't automatically say everything was in Redux.

For this type of screen, I would explain:

I would keep temporary builder state such as the current trigger, conditions, and actions locally in the automation container because it belongs to that screen. Redux would be useful for shared data such as workspace information, user information, or automation metadata that is consumed across multiple screens.

This distinction is important.

## 17. Your Main Challenge


This should be your primary challenge story:

The main challenge was maintaining consistency between dependent fields. When the trigger or template changed, the available conditions and actions also changed. If I kept the previous selections, they could become invalid. So I treated the trigger as the parent dependency. Whenever it changed, I cleared the dependent state, loaded the new metadata, and rendered the new configuration.

Then add:

The second challenge was edit mode. We needed to restore the saved rule exactly as the user had configured it. That required loading the correct metadata first and then restoring the saved conditions and actions.

## 18. Your 2-Minute Interview Answer


Memorize something close to this:

I worked on the Automation module in VABRO. The module allows users to configure automation rules using a trigger, conditions, and actions.

From the React frontend perspective, I structured the screen into separate components for the trigger, condition builder, and action builder. The main state was maintained at the parent automation level because the trigger affects the conditions and actions.

The UI was configuration-driven. When the user selected a trigger, I loaded the corresponding templates or metadata from the API and stored them in state. The condition and action components then rendered dynamically based on that configuration.

One of the main challenges was dependency management. If the user changed the trigger, the previously selected conditions or actions might no longer be valid. So I cleared the dependent state, loaded the new metadata, and rendered the appropriate fields.

Another important part was edit functionality. When a user edited an existing automation, we fetched the saved configuration, restored the trigger, loaded its corresponding metadata, and then restored the saved conditions and actions. This ensured that the edit screen showed the same rule the user had previously configured.

I used React state, effects, reusable components, callbacks, and API/service functions to keep the UI modular and synchronized. The final state was converted into the required API payload when the user saved the automation.

## 19. Your Frontend Architecture in One Picture


This is the picture you should have in your head during the interview:

```text
                    AUTOMATION PAGE
                          │
                          │
                 ┌────────▼────────┐
                 │ Automation State │
                 │                 │
                 │ trigger         │
                 │ conditions[]    │
                 │ actions[]       │
                 │ metadata        │
                 │ editData        │
                 └────────┬────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
              ▼           ▼           ▼
          Trigger     Condition     Action
          Section     Builder       Builder
              │           │           │
              │           ▼           ▼
              │       Condition      Action
              │          Row           Row
              │
              ▼
        Trigger Changes
              │
              ▼
       Clear Dependent State
              │
              ▼
       Fetch New Metadata
              │
              ▼
       Update React State
              │
              ▼
        Re-render UI
```


And for editing:

```text
             EDIT AUTOMATION
                    │
                    ▼
            Fetch Existing Rule
                    │
                    ▼
             Saved Configuration
                    │
                    ▼
              Set Trigger
                    │
                    ▼
          Load Trigger Metadata
                    │
                    ▼
          Restore Conditions
                    │
                    ▼
             Restore Actions
                    │
                    ▼
             Render UI
```

## The 5 things you should remember


If you get nervous in the interview, remember just these:

1. State → trigger, conditions, actions, metadata.

2. Components → Trigger, Condition Builder, Action Builder.

3. Dependency → trigger changes conditions/actions.

4. Edit → fetch → load metadata → restore saved state.

5. Save → React state → API payload → backend.

That gives you a consistent story for almost every cross-question about this module
