<template>
  <p-modal
    size="full"
    body-class="grid h-full grid-cols-8">
    <template #header>
      <div class="overflow-y-auto modal--full__header__content">
        <div class="flex items-center p-3 space-x-3">
          <div style="position: relative;">
            <pi-need-action-alt-20 />
          </div>
          <p-text class="text-subtle">
            Document 1
          </p-text>
        </div>
      </div>
      <div class="modal--full__header">
        <div class="flex items-center p-3 space-x-3">
          <p-button color="danger">
            Continue
          </p-button>
          <p-button
            variant="solid"
            icon>
            <pi-download-20 />
          </p-button>
        </div>
      </div>
    </template>
    <template #body>
      <div class="col-span-6 px-4 pt-4 bg-base">
        <div class="grid grid-cols-1 gap-4">
          <div class="p-6 rounded shadow-sm bg-default">
            <div class="flex flex-row justify-between">
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Tool
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-add-plus-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-document-check-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Insert
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-text-editor-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-image-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-highlight-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-message-20 />
                  </p-button>
                  <p-dropdown
                    variant="ghost"
                    icon
                    no-caret>
                    <template #button-content>
                      <pi-edit-square-20 />
                      <pi-caret-down-20 />
                    </template>

                    <p-dropdown-item>Item Text</p-dropdown-item>
                    <p-dropdown-item>Item Text</p-dropdown-item>
                    <p-dropdown-item>Item Text</p-dropdown-item>
                  </p-dropdown>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-link-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Form
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-record-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-persona-20 />
                  </p-button>
                </div>
              </div>

              <div class="border-r border-base mx-4" />
              <div class="flex flex-col ...">
                <p-text variant="overline">
                  Placement
                </p-text>
                <div class="flex flex-row ...">
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-signature-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-stamp-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-signature-text-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-e-meterai-20 />
                  </p-button>
                  <p-button
                    variant="ghost"
                    icon>
                    <pi-document-seal-20 />
                  </p-button>
                </div>
              </div>
            </div>
          </div>
          <div class="p-6 rounded shadow-sm bg-default">
            This is place holder text. The basic dialog for modals
            should contain only valuable and relevant information.
          </div>
        </div>
      </div>
      <div class="col-span-2 p-7 bg-default">
        <p-subheading weight="bold">
          Document properties
        </p-subheading>
        <p-text variant="caption">
          Adjust the basic settings of your document.
        </p-text>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="grid grid-cols-1">
            <p-text variant="body2">
              Size
            </p-text>
            <p-dropdown
              text="A4"
              variant="outline">
              <p-dropdown-item>Item Text</p-dropdown-item>
              <p-dropdown-item>Item Text</p-dropdown-item>
              <p-dropdown-item>Item Text</p-dropdown-item>
            </p-dropdown>
          </div>
          <div>
            <p-text variant="body2">
              Orientation
            </p-text>
            <p-dropdown
              text="Potrait"
              variant="outline">
              <p-dropdown-item>Item Text</p-dropdown-item>
              <p-dropdown-item>Item Text</p-dropdown-item>
              <p-dropdown-item>Item Text</p-dropdown-item>
            </p-dropdown>
          </div>
        </div>

        <div class="border-t border-base mt-6" />
      </div>
    </template>
  </p-modal>
</template>
