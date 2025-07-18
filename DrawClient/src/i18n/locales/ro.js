const romanian = {
  name: "Romanian",
  native_name: "Română",
  code: "ro",
};

const ro = {
  translation: {
    report_bug: "Raportează o eroare",
    import_from: "Import",
    import: "Import",
    file: "Fișier",
    new: "Nou",
    new_window: "Fereastră nouă",
    open: "Deschide",
    save: "Salvează",
    save_as: "Salvează ca",
    save_as_template: "Salvează ca șablon",
    template_saved: "Șablon salvat!!",
    rename: "Redenumi",
    delete_diagram: "Șterge diagramă",
    are_you_sure_delete_diagram:
      "Ești sigur că vrei să ștergi această diagramă? Această operațiune este ireversibilă.",
    oops_smth_went_wrong: "Oops! A apărut o problemă",
    import_diagram: "Importă o diagramă",
    import_from_source: "Importă din SQL",
    export_as: "Exportă ca",
    export_source: "Exportă SQL",
    models: "Modele",
    exit: "Ieșire",
    edit: "Editează",
    undo: "Anulează",
    redo: "Refă",
    clear: "Șterge",
    are_you_sure_clear:
      "Ești sigur că vrei să cureți diagramă? Aceasta operațiune este ireversibilă.",
    cut: "Taie",
    copy: "Copiază",
    paste: "Lipește",
    duplicate: "Duplica",
    delete: "Șterge",
    copy_as_image: "Copiază ca imagine",
    view: "Vizualizează",
    header: "Bară de meniu",
    sidebar: "Bară laterală",
    issues: "Probleme",
    presentation_mode: "Mod prezentare",
    strict_mode: "Mod strict",
    field_details: "Detalii câmp",
    reset_view: "Resetează vizualizarea",
    show_grid: "Arată grilă",
    show_cardinality: "Arată cardinalitatea",
    theme: "Temă",
    light: "Luminos",
    dark: "Întunecat",
    zoom_in: "Măriți",
    zoom_out: "Micșora",
    fullscreen: "Ecran complet",
    settings: "Setări",
    show_timeline: "Arată cronologia",
    autosave: "Salvare automată",
    panning: "Panoramare",
    show_debug_coordinates: "Arată coordonatele de depanare",
    transform: "Transformă",
    viewbox: "Cutie de vizualizare",
    cursor_coordinates: "Coordonate cursorului",
    coordinate_space: "Spațiu",
    coordinate_space_screen: "Ecran",
    coordinate_space_diagram: "Diagramă",
    table_width: "Lățimea tabelului",
    language: "Limbă",
    flush_storage: "Golește depozitorea",
    are_you_sure_flush_storage:
      "Esti sigur că vrei să golesți depozitorea? Aceasta va șterge ireversibil toate diagramele și modelele personalizate.",
    storage_flushed: "Depozitorea a fost golită",
    help: "Ajutor",
    shortcuts: "Scurtături",
    ask_on_discord: "Contactați autorul",
    feedback: "Feedback",
    no_changes: "Nicio modificare",
    loading: "Se încarcă...",
    last_saved: "Ultima salvare",
    saving: "Se salvează...",
    failed_to_save: "Salvarea a eșuat",
    fit_window_reset: "Potrivește fereastra / Resetează",
    zoom: "Zoom",
    add_table: "Adaugă tabel",
    add_area: "Adaugă zonă",
    add_note: "Adaugă notă",
    add_type: "Adaugă tip",
    to_do: "De făcut",
    tables: "Tabele",
    relationships: "Relații",
    subject_areas: "Zonă subiectelor",
    notes: "Note",
    types: "Tipuri",
    search: "Căutare...",
    no_tables: "Fără tabele",
    no_tables_text: "Începe să construiești diagrama!",
    no_relationships: "Fără relații",
    no_relationships_text: "Trage pentru a conecta câmpuri și a forma relații!",
    no_subject_areas: "Fără zone de subiecte",
    no_subject_areas_text: "Adaugă zone de subiecte pentru a grupa tabelele!",
    no_notes: "Fără note",
    no_notes_text:
      "Folosește notele pentru a înregistra informații suplimentare",
    no_types: "Fără tipuri",
    no_types_text: "Creează-ți propriile tipuri de date personalizate",
    no_issues: "Nu au fost detectate probleme.",
    strict_mode_is_on_no_issues:
      "Modul strict este dezactivat, așa că nu vor fi afișate probleme.",
    name: "Nume",
    type: "Tip",
    null: "Null",
    not_null: "Nu este null",
    primary: "Primar",
    unique: "Unic",
    autoincrement: "Increment automat",
    default_value: "Implicit",
    check: "Verifică expresia",
    this_will_appear_as_is:
      "*Aceasta va apărea așa cum este în scriptul generat.",
    comment: "Comentariu",
    add_field: "Adaugă câmp",
    values: "Valori",
    size: "Mărime",
    precision: "Precizie",
    set_precision: "Setează precizia: 'mărime, cifre'",
    use_for_batch_input: "Folosește , pentru input în masă",
    indices: "Indici",
    add_index: "Adaugă index",
    select_fields: "Selectează câmpuri",
    title: "Titlu",
    not_set: "Necompletat",
    foreign: "Străin",
    cardinality: "Cardinalitate",
    on_update: "La actualizare",
    on_delete: "La ștergere",
    swap: "Schimbă",
    one_to_one: "Unul la unul",
    one_to_many: "Unul la mulți",
    many_to_one: "Mulți la unul",
    content: "Conținut",
    types_info:
      "Această caracteristică este destinată DBMS-urilor obiect-relaționale precum PostgreSQL.\nDacă este folosită pentru MySQL sau MariaDB, un tip JSON va fi generat cu validarea corespunzătoare a json.\nDacă este folosită pentru SQLite, va fi tradusă într-un BLOB.\nDacă este folosită pentru MSSQL, va fi generat un alias de tip pentru primul câmp.",
    table_deleted: "Tabel șters",
    area_deleted: "Zonă ștearsă",
    note_deleted: "Notă ștearsă",
    relationship_deleted: "Relație ștearsă",
    type_deleted: "Tip șters",
    cannot_connect: "Nu se poate conecta, coloanele au tipuri diferite",
    copied_to_clipboard: "Copiat în clipboard",
    create_new_diagram: "Creează diagramă nouă",
    cancel: "Anulează",
    open_diagram: "Deschide diagrama",
    rename_diagram: "Redenumește diagrama",
    export: "Exportă",
    export_image: "Exportă imagine",
    create: "Creează",
    confirm: "Confirmați",
    last_modified: "Ultima modificare",
    drag_and_drop_files:
      "Trageți și plasați fișierul aici sau faceți clic pentru a încărca.",
    upload_sql_to_generate_diagrams:
      "Încărcați un fișier SQL pentru a genera automat tabelele și coloanele.",
    overwrite_existing_diagram: "Suprascrie diagrama existentă",
    only_mysql_supported:
      "*Deocamdată, este acceptat doar încărcarea scripturilor MySQL.",
    blank: "Gol",
    filename: "Nume fișier",
    table_w_no_name: "A fost declarat un tabel fără nume",
    duplicate_table_by_name: "Tabel duplicat cu numele '{{tableName}}'",
    empty_field_name: "Nume câmp gol `nume` în tabelul '{{tableName}}'",
    empty_field_type: "Tip câmp gol `tip` în tabelul '{{tableName}}'",
    no_values_for_field:
      "'{{fieldName}}' câmp din tabelul '{{tableName}}' este de tip `{{type}}` dar nu au fost specificate valori",
    default_doesnt_match_type:
      "Valoarea implicită pentru câmpul '{{fieldName}}' din tabelul '{{tableName}}' nu se potrivește cu tipul său",
    not_null_is_null:
      "'{{fieldName}}' câmp din tabelul '{{tableName}}' NU ESTE NULL dar are valoarea implicită NULL",
    duplicate_fields:
      "Câmpuri duplicate în tabelul '{{tableName}}' cu numele '{{fieldName}}'",
    duplicate_index:
      "Index duplicat cu numele '{{indexName}}' în tabelul '{{tableName}}'",
    empty_index: "Index în tabelul '{{tableName}}' nu indexează nici o coloană",
    no_primary_key: "Tabelul '{{tableName}}' nu are cheie primară",
    type_with_no_name: "A fost declarat un tip fără nume",
    duplicate_types: "Tipuri duplicate cu numele '{{typeName}}'",
    type_w_no_fields: "A fost declarat un tip gol '{{typeName}}' fără câmpuri",
    empty_type_field_name: "Nume câmp gol `nume` în tipul '{{typeName}}'",
    empty_type_field_type: "Tip câmp gol `tip` în tipul '{{typeName}}'",
    no_values_for_type_field:
      "'{{fieldName}}' câmp din tipul '{{typeName}}' este de tip `{{type}}` dar nu au fost specificate valori",
    duplicate_type_fields:
      "Câmpuri duplicate în tipul '{{typeName}}' cu numele '{{fieldName}}'",
    duplicate_reference: "Referință duplicată cu numele '{{refName}}'",
    circular_dependency: "Dependență circulară implicând tabelul '{{refName}}'",
    timeline: "Cronologie",
    priority: "Prioritate",
    none: "Nimic",
    low: "Scăzut",
    medium: "Mediu",
    high: "Ridicat",
    sort_by: "Sortează după",
    my_order: "Comanda mea",
    completed: "Completat",
    alphabetically: "Alfabetic",
    add_task: "Adaugă sarcină",
    details: "Detalii",
    no_tasks: "Nu aveți sarcini încă.",
    no_activity: "Nu aveți activitate încă.",
    move_element: "Mută {{name}} la {{coords}}",
    edit_area: "{{extra}} Editează zona {{areaName}}",
    delete_area: "Șterge zona {{areaName}}",
    edit_note: "{{extra}} Editează nota {{noteTitle}}",
    delete_note: "Șterge nota {{noteTitle}}",
    edit_table: "{{extra}} Editează tabelul {{tableName}}",
    delete_table: "Șterge tabelul {{tableName}}",
    edit_type: "{{extra}} Editează tipul {{typeName}}",
    delete_type: "Șterge tipul {{typeName}}",
    add_relationship: "Adaugă relație",
    edit_relationship: "{{extra}} Editează relația {{refName}}",
    delete_relationship: "Șterge relația {{refName}}",
    not_found: "Nu a fost găsit",
    pick_db: "Alege o bază de date",
    generic: "General",
    generic_description:
      "Diagramele generale pot fi exportate în orice tip de SQL, dar susțin câteva tipuri de date.",
    enums: "Enumerații",
    add_enum: "Adaugă enumerație",
    edit_enum: "{{extra}} Editează enumerația {{enumName}}",
    delete_enum: "Șterge enumerația",
    enum_w_no_name: "Enumerație găsită fără nume",
    enum_w_no_values: "Enumerația '{{enumName}}' nu conține valori",
    duplicate_enums: "Enumerații duplicate cu numele '{{enumName}}'",
    no_enums: "Fără enumerații",
    no_enums_text: "Definiți enumerații aici",
    declare_array: "Declarați un array",
    empty_index_name:
      "A fost declarat un index fără nume în tabelul '{{tableName}}'",
    didnt_find_diagram: "Oops! Nu am găsit diagrama.",
    unsigned: "Fără semn",
    share: "Împărtășește",
    unshare: "Nu mai împărtăși",
    copy_link: "Copiază linkul",
    readme: "README",
    failed_to_load: "Eșec la încărcare. Asigurați-vă că linkul este corect.",
    share_info:
      "*Împărtășirea acestui link nu va crea o sesiune de colaborare în timp real.",
    show_relationship_labels: "Arată etichetele relațiilor",
    docs: "Documentație",
  },
};

export { ro, romanian };
