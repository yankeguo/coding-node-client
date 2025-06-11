# GitDiff

git diff 信息详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeType** | **string** | 文件改变类型 | [optional] [default to '']
**Content** | **string** | diff信息内容 | [optional] [default to '']
**Deletions** | **number** | 一共删除几行 | [optional] [default to undefined]
**Insertions** | **number** | 一共新增几行 | [optional] [default to undefined]
**Lines** | [**Array&lt;Line&gt;**](Line.md) | diff每行信息拆解后的集合信息 | [optional] [default to undefined]
**NewMode** | **string** | 修改后文件的权限 | [optional] [default to '']
**OldMode** | **string** | 修改前文件的权限 | [optional] [default to '']
**Path** | **string** | 文件路径 | [optional] [default to '']

## Example

```typescript
import { GitDiff } from './api';

const instance: GitDiff = {
    ChangeType,
    Content,
    Deletions,
    Insertions,
    Lines,
    NewMode,
    OldMode,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
