# ArtifactRepositoryFileListData

制品仓库文件列表

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContinuationToken** | **string** | 翻页符，最后一页该字段为空 | [optional] [default to '']
**InstanceSet** | [**Array&lt;ArtifactRepositoryFile&gt;**](ArtifactRepositoryFile.md) | 文件列表 | [optional] [default to undefined]

## Example

```typescript
import { ArtifactRepositoryFileListData } from './api';

const instance: ArtifactRepositoryFileListData = {
    ContinuationToken,
    InstanceSet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
