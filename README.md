# ember-contextual-components-changeset 

A sandbox for experimenting with contextual components and `ember-changeset`.

Switch between git branches to view differing implementations.

## branch: master

[master](https://github.com/0xadada/ember-contextual-components-changeset/tree/master) branch contains
a repo doing default all-in-one validation that occurs when any changes are made
to any field. In this case, the changeset is invalid
but only shows errors for fields that haven't been touched (`isPristine`).

## incremental-validation

The [incremental
validation](https://github.com/0xadada/ember-contextual-components-changeset/tree/incremental-validation)
branch uses a custom validator function to only validate the currently-focused
field upon `onBlur` event. This allows for progressive disclosure of validation
errors.

## incremental-validation-sub-component

The [incremental-validation-sub-component](https://github.com/0xadada/ember-contextual-components-changeset/tree/incremental-validation-sub-component)
does other stuff.
