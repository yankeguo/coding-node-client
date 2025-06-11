# CreateGitTagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Message** | **string** | tag创建信息 | [optional] [default to undefined]
**StartPoint** | **string** | 创建来源的分支或commitId | [optional] [default to undefined]
**TagName** | **string** | tag名称 | [optional] [default to undefined]

## Example

```typescript
import { CreateGitTagRequest } from './api';

const instance: CreateGitTagRequest = {
    DepotId,
    DepotPath,
    Message,
    StartPoint,
    TagName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
