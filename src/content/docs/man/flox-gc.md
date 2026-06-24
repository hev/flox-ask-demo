---
title: "flox gc"
description: "flox-gc - Garbage collection"
group: "Manual"
order: 73
---

## NAME

flox-gc - Garbage collection

## SYNOPSIS

```text
flox [<general options>] gc
```

## DESCRIPTION

Garbage collects any data for deleted environments.

This both deletes data managed by Flox and runs garbage collection on the Nix store.

## OPTIONS

### General Options

**`-h`, `--help`**
Prints help information.

The following options can be passed when running any `flox` subcommand but must
be specified _before_ the subcommand.

**`-v`, `--verbose`**
Increase logging verbosity.
Invoke multiple times for increasing detail.

**`-q`, `--quiet`**
Silence logs except for errors.

## SEE ALSO
[`flox-envs(1)`](/docs/man/flox-envs)
